import Component from '../framework/component';
import Header from '../components/header';
import Footer from '../components/footer';
import { toHtml } from '../utils/utils';

class User extends Component {
    constructor(props) {
        super(props);
        this.host = document.createElement('div');
        this.host.classList.add('user-container');
        this.header = new Header();
        this.footer = new Footer();
    }

    render() {
        const user = `
        <main class="user">User</main>
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