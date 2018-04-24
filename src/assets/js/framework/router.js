import Component from './component';
import { AUTH_SERVICE } from '../utils/auth';

class Router extends Component {
	constructor(props) {
		super(props);
		const { routes, host } = this.props;
		this.host = host;

		this.state = {
			routes,
			activeRoute: null,
			activeComponent: null,
		};

		this.handleUrlChange = this.handleUrlChange.bind(this);
		this.applyRoute = this.applyRoute.bind(this);

		window.addEventListener('hashchange', () => this.handleUrlChange(this.path));

		this.handleUrlChange(this.path);
	}

	get path() {
		return window.location.hash.slice(1);
	}

	handleUrlChange(url) {
		const { routes, activeRoute } = this.state;
		const nextRoute = routes.find(({ href }) => href === url);
		if (nextRoute && nextRoute !== activeRoute) {
			if (nextRoute.redirectTo) {
				return this.handleRedirect(nextRoute.redirectTo);
			}

			if (nextRoute.onEnter) {
				return this.handleOnEnter(nextRoute);
			}

			this.applyRoute(nextRoute);
		}
	}

	handleRedirect(url) {
		window.location.hash = url;
	}

	handleOnEnter(nextRoute) {
		const { onEnter } = nextRoute;

		if (onEnter.logout) {
			AUTH_SERVICE.clearStorage();
		}

		const onEnterGuard = onEnter.guard;
		onEnterGuard(nextRoute).then(res => {
			return res.success ? this.applyRoute(res.route) : this.handleRedirect(res.redirect);
		});
	}

	applyRoute(route) {
		const { Component } = route;
		const { activeComponent } = this.state;
		const componentInstance = new Component();

		activeComponent ? activeComponent.unmount() : null;

		this.updateState({
			activeRoute: route,
			activeComponent: componentInstance,
		});
	}

	render() {
		const { activeComponent } = this.state;
		return activeComponent.update();
	}
}

export default Router;
