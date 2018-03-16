import Component from '../framework/component';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('main');
        this.host.classList.add('login');
    }

    render() {
        return `
        <div class="container">
            <form class="registration__form">
                <input class="registration__input" type="text" name="username" placeholder="username">
                <input class="registration__input" type="email" name="email" placeholder="e-mail">
                <input class="registration__input" type="password" name="password" placeholder="password">
                <button class="registration__button" type="submit">login</button>
            </form>
        </div>
        `;
    }
}

export default RegistrationForm;