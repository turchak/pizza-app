import Component from '../framework/component';
import Header from '../components/header';
import Footer from '../components/footer';
import { toHtml } from '../utils/utils';
import { AUTH_HTTP_SERVICE } from '../utils/auth-http';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            created: null,
            visited: null
        };
        this.host = document.createElement('div');
        this.host.classList.add('user-container');
        this.header = new Header();
        this.footer = new Footer();
        this.getUserInfo();
    }

    getUserInfo() {
        AUTH_HTTP_SERVICE.getUserInfo().then(result => {
            this.updateState({
                username: result.username,
                email: result.email,
                created: result.created_at,
                visited: result.last_login
            });
        });
    }

    render() {
        const { username, email, created, visited } = this.state;
        console.log(this.state);
        const user = `
        <main class="user">
            <ul>
                <li>${ username }</li>
                <li>${ email }</li>
                <li>${ created }</li>
                <li>${ visited }</li>
            </ul>
        </main>
        `;
        const fragment = toHtml(user);
        return [
            this.header.update(),
            fragment,
            this.footer.update()
        ];
    }
}

export default User;