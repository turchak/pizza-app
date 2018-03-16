import Component from '../framework/component';

class Header extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('header');
        this.host.classList.add('header');
    }

    render() {
        //TODO: need delete <a href="#/login" class="login__button-link">sing in</a>
        return `
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
                    <button class="auth__button auth__button--in">
                        <a href="#/login" class="auth__button-link">sing in</a>
                    </button>
                    <button class="auth__button auth__button--up">
                        <a href="#/registration" class="auth__button-link">sing up</a>
                    </button>
                </aside>
            </nav>
        </div>
        `;
    }
}

export default Header;