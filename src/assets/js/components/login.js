import Component from '../framework/component';
import Footer from '../components/footer';
import Header from '../components/header';
import LoginForm from '../components/login.form';

class Login extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('div');
        this.host.classList.add('login-container');
        this.handleSubmit = this.handleSubmit.bind(this);
        this.host.addEventListener('submit', this.handleSubmit);

        this.header = new Header();
        this.login = new LoginForm();
        this.footer = new Footer();
    }

    handleSubmit(ev) {
        ev.preventDefault();
    }

    render() {
        return [
            this.header.update(),
            this.login.update(),
            this.footer.update()
        ];
    }
}

export default Login;