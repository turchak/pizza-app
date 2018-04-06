import Component from '../framework/component';
import { toHtml } from '../utils/utils';
import { AUTH_SERVICE } from '../utils/auth';

class Header extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('header');
        this.host.classList.add('header');
    }

    render() {
        //TODO: need delete <a href="#/login" class="login__button-link">sign in</a>
        const isAuthorized = AUTH_SERVICE.isAuthorized();

        const loginButton = `
            <a href="#/login" class="button auth__button auth__button--in">sign in</a>
        `;
        const logoutButton = `
            <a href="#/logout" class="button auth__button auth__button--out">sign out</a>
        `;
        const userButton = `
            <a href="#/user" class="button auth__button auth__button--info">user info</a>
        `;
        const registrationButton = `
            <a href="#/registration" class="button auth__button auth__button--up">sign up</a>
        `;

        const header = `
        <div class="container">
            <nav class="nav">
                <aside class="current-time">
                    <svg width="50" height="50">
                      <use xlink:href="#clock"></use>
                    </svg>
                    <time datetime="2018-02-03 12:01:48">12:01:48</time>
                </aside>
                <a class="logo" href="#/">
                    <svg width="100" height="100">
                      <use xlink:href="#logo"></use>
                    </svg>
                </a>
                <aside class="auth">
                    ${ isAuthorized ? logoutButton : loginButton }
                    ${ isAuthorized ? userButton : registrationButton } 
                </aside>
            </nav>
        </div>
        `;

        const fragment = toHtml(header);
        return fragment;
    }
}

export default Header;