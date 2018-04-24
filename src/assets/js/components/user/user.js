import Component from '../../framework/component';
import Header from '../header/header';
import Footer from '../footer/footer';
import { toHtml } from '../../utils/utils';
import { AUTH_HTTP_SERVICE } from '../../utils/auth.http';
import { USER_URL } from '../../utils/constants';
import { TIME } from '../../utils/time';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isValid: false,
			username: null,
			email: null,
			created: null,
			visited: null,
		};
		this.host = document.createElement('div');
		this.host.classList.add('user-container');
		this.header = new Header();
		this.footer = new Footer();
		this.getUser();
	}

	getUser() {
		AUTH_HTTP_SERVICE.get(USER_URL).then(res => {
			this.updateState({
				username: res.username,
				email: res.email,
				created: res.created_at,
				visited: res.last_login,
				isValid: true,
			});
		});
	}

	render() {
		const { username, email, created, visited, isValid } = this.state;

		const containerString = `
			<main class='user'>
				<div class='container user__container'></div>
			</main>`;

		const containerFragment = toHtml(containerString);
		const containerElement = containerFragment.querySelector('.container');

		if (isValid) {
			const userString = `
				<ul class='user__info'>
					<li class='user__name'>User: 
						<span>${username}</span>
					</li>
					<li class='user__mail'>E-mail: 
						<span>${email}</span>
					</li>
					<li class='user__created'>Created:
						<span>${TIME.convertDate(created)}</span>
					</li>
					<li class='user__visited'>Last seen:
						<span>${TIME.convertDate(visited)}</span>
					</li>
				</ul>`;
			const userFragment = toHtml(userString);
			containerElement.append(userFragment);
		}

		return [this.header.update(), containerFragment, this.footer.update()];
	}
}

export default User;
