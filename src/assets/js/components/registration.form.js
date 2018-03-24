import Component from '../framework/component';
import { toHtml } from '../utils/utils';
import { AUTH_SERVICE } from '../utils/auth';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.host = document.createElement('main');
        this.host.classList.add('registration');
        this.getStores();
    }

    getStores() {
        AUTH_SERVICE.storeInfo()
            .then(result => {
                this.state.stores = result; 
                this.updateState();
            });
    }

    handleSubmit(ev) {
        ev.preventDefault();
        const data = {
            username: ev.target.username.value.trim(),
            password: ev.target.password.value.trim(),
            password_repeat: ev.target.password_repeat.value.trim(),
            email: ev.target.email.value.trim(),
            store_id: parseInt(ev.target.store.options[ev.target.store.selectedIndex].dataset.id),
            store_password: ev.target.store_password.value.trim()
        };
        AUTH_SERVICE.registerUser(data).then(result => {
            console.log(result);
        })
    }

    render() {
        const { stores } = this.state;
        
        const registration =  `
        <div class="container">
            <form class="registration__form">
                <h2 class="registration__title">registration form</h2>
                <label for="registration-username">Username</label>
                <input class="registration__input" id="registration-username" type="text" name="username" placeholder="Unique. Min length 2 chars, max - 24">
                <label for="registration-password">Password</label>
                <input class="registration__input" id="registration-password" type="password" name="password" placeholder="Min length 8 chars">
                <label for="registration-re-password">Re-enter password</label>
                <input class="registration__input" id="registration-re-password" type="password" name="password_repeat" placeholder="Should match with password">
                <label for="registration-email">Email</label>
                <input class="registration__input" id="registration-email" type="email" name="email" placeholder="Should be valid email">
                <label for="registration-store">Store</label>
                <select hidden id="registration-store" name="store"></select>
                <label for="registration-store-password">Store password</label>
                <input class="registration__input" for="registration-store-password" type="password" name="store_password" placeholder="Should be valid store password. Min length 8 chars">
                <button class="registration__button" type="submit">sign up</button>
            </form>
        </div>
        `;

        const fragment = toHtml(registration);
        

        const select = fragment.querySelector('select');
        select.classList.add('registration__select');

        if (!!stores) {
            select.hidden = false;
            stores.forEach(element => {
                const option = document.createElement('option');
                option.text = element.name;
                option.dataset.id = element.id;
                select.add(option);
            });
        }

        const form = fragment.querySelector('form');
        form.addEventListener('submit', this.handleSubmit);
    
        return fragment;
    }
}

export default RegistrationForm;