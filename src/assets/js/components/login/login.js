import Component from '../../framework/component';
import Footer from '../footer/footer';
import Header from '../header/header';
import LoginForm from './login.form';

class Login extends Component {
	constructor(props) {
		super(props);
		this.host = document.createElement('div');
		this.host.classList.add('login-container');
		this.header = new Header();
		this.loginForm = new LoginForm();
		this.footer = new Footer();
	}
	render() {
		return [this.header.update(), this.loginForm.update(), this.footer.update()];
	}
}

export default Login;
