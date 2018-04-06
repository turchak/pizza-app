import Component from './component';
import { authGuard } from '../utils/auth.guard';

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
        this.applyRoute = this.applyRoute.bind(this);

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
        const nextRoute = routes.find(({ href }) => href === url);

        if (nextRoute && nextRoute !== activeRoute) {
            
            if (!!nextRoute.redirectTo) {
                return this.handleRedirect(nextRoute.redirectTo);
            }

            if(!!nextRoute.logout) {
                console.log('logout')
                this.handleLogout(nextRoute);
            }

            if (!!nextRoute.onEnter) {
                console.log('onEnter')
                this.handleOnEnter(nextRoute);
            }

            

            this.applyRoute(nextRoute);
        }

    }

    handleLogout(nextRoute) {
        nextRoute.logout();
    }

    handleRedirect(url) {
        window.location.hash = url;
    }

    handleOnEnter(nextRoute) {
        authGuard().then(res => {
            res.success ? null : this.handleRedirect(res.redirect);   
        });
    }

    applyRoute(route) {
        const { Component } = route;
        const componentInstance = new Component();
    
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