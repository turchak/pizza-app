import Component from '../framework/component';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('main');
        this.host.classList.add('login');
    }

    render() {
        return `
        <div class="container">
            <form class="login__form">
                <h2>Login</h2>
                <input class="login__input" type="text" name="username" placeholder="username">
                <input class="login__input" type="password" name="password" placeholder="password">
                <button class="login__button" type="submit">sing in</button>
            </form>
        </div>
        `;
    }
}

export default LoginForm;