import Component from '../framework/component';
import { toHtml } from '../utils/utils';
import ErrorMessage from './error.message';
import { AUTH_SERVICE } from '../utils/auth';
import { APP_ROUTER } from '../index';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null,
			message: null,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.host = document.createElement('main');
		this.host.classList.add('login');
		this.message = new ErrorMessage();
	}

	handleSubmit(ev) {
		ev.preventDefault();
		const host = ev.target;
		const data = {
			username: host.username.value.trim(),
			password: host.password.value.trim(),
		};
		AUTH_SERVICE.loginUser(data).then(
			res => {
				const state = {
					username: host.username.value.trim(),
					password: host.password.value.trim(),
					message: null,
				};
				this.updateState(state);
				APP_ROUTER.handleRedirect('/');
			},
			status => {
				const text = status.answer.error;
				const state = {
					username: host.username.value.trim(),
					password: host.password.value.trim(),
					message: text,
				};
				this.updateState(state);
			}
		);
	}

	render() {
		const { username, password, message } = this.state;

		const login = `
        <div class="container">
            <form class="login__form">
                <h2 class="login__title">Login</h2>
                <label for="login-username">Username</label>
                <input class="login__input" id="login-username" type="text" name="username" placeholder="Your name" value=${
	username ? username : ''
}>
                <label for="login-password">Password</label>
                <input class="login__input" id="login-password" type="password" name="password" placeholder="Your password" value=${
	password ? password : ''
}>
                <button class="button login__button" type="submit">sign in</button>
            </form>
        </div>
        `;

		const fragment = toHtml(login);

		if (message) {
			const errorMessage = this.message.update({ text: message });
			fragment.querySelector('.login__button').appendChild(errorMessage);
		}

		fragment.querySelector('.login__form').addEventListener('submit', this.handleSubmit);
		return fragment;
	}
}

export default LoginForm;
