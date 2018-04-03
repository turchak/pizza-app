import Component from './component';
import { isUrlParam, isEqualPaths, extractUrlParams } from '../utils/utils';
import { authGuard } from '../utils/auth.guard';

const ANY_PATH = '*';

class Router extends Component {
    constructor(props) {
        super(props);

        const { routes, host } = this.props;

        this.state = {
            routes,
            activeRoute: null,
            activeComponent: null
        };

        this.host = host;
        this.handleUrlChange = this.handleUrlChange.bind(this);

        window.addEventListener('hashchange', () => 

            this.handleUrlChange(this.path)
        );

        this.handleUrlChange(this.path);
    }

    get path() {
        return window.location.hash.slice(1);
    }

    handleUrlChange(url) {
        const { routes, activeRoute } = this.state;

        let nextRoute = routes.find(({ href }) => isEqualPaths(href, url));

        if (!nextRoute) {
            nextRoute = routes.find(({ href }) => href === ANY_PATH); //looking for any route
        }

        if (nextRoute && nextRoute !== activeRoute) {
            
            if (!!nextRoute.redirectTo) {
                return this.handleRedirect(nextRoute.redirectTo);
            }

            if(!!nextRoute.logout) {
                this.handleLogout(nextRoute)
            }

            if (!!nextRoute.onEnter) {
                this.handleOnEnter(nextRoute, url);
            }


            this.applyRoute(nextRoute, url);
        }

    }

    handleLogout(nextRoute) {
        return nextRoute.logout();
    }

    handleRedirect(url) {
        window.location.hash = url;
    }

    handleOnEnter(nextRoute, url) {
        const { href } = nextRoute;
        const params = extractUrlParams(href, url);

        authGuard().then(res => {
            if (res.success) {
                if (nextRoute.component === 'App') return this.handleRedirect('#/');
                if (nextRoute.component === 'User') return this.handleRedirect('#user/');
            }
            else {
                return this.handleRedirect(res.redirect);
            }
        });
    }

    applyRoute(route, url) {
        const { href, component: Component } = route;
        const { activeComponent } = this.state;
        const componentInstance = new Component({
            params: extractUrlParams(href, this.path),
            replace: this.handleRedirect,
        });
    
        if (activeComponent) {
            activeComponent.unmount();
        }
    
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