import Component from '../../framework/component';
import Footer from '../footer/footer';
import Header from '../header/header';
import RegistrationForm from './registration.form';

class Registration extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('registration-container');
		this.handleSubmit = this.handleSubmit.bind(this);
		this.host.addEventListener('submit', this.handleSubmit);

		this.header = new Header();
		this.registration = new RegistrationForm();
		this.footer = new Footer();
	}

	handleSubmit(ev) {
		ev.preventDefault();
	}

	render() {
		return [this.header.update(), this.registration.update(), this.footer.update()];
	}
}

export default Registration;