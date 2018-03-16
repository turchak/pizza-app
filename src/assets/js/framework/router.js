import Component from './component';

class Router extends Component {
    constructor(props) {
        super(props);

        const { routes, host } = this.props;

        this.state = {
            routes,
            currentRoute: null,
            currentComponent: null
        };

        this.host = host;

        console.log(props);
        this.handleUrlChange = this.handleUrlChange.bind(this);

        window.addEventListener('hashchange', () => 
            this.handleUrlChange(this.path)
        );

        this.handleUrlChange(this.path);
    }

    get path() {
        return window.location.hash.slice(1);
    }

    handleUrlChange(path) {
        const { routes, currentRoute } = this.state;

        const nextRoute = routes.find(({ href }) => href === this.path);

        if (nextRoute && nextRoute !== currentRoute) {
            if (nextRoute.onEnter) {
                this.handleOnEnter(nextRoute);
            }
            this.updateState({
                activeComponent: new nextRoute.component(),
                currentRoute: nextRoute
            });
        }
    }

    handleOnEnter({ onEnter }) {
        onEnter();
    }

    render() {
        const { activeComponent } = this.state;

        return activeComponent.update();
    }
}

export default Router;