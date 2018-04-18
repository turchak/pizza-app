import Component from '../../framework/component';
import Footer from '../footer/footer';
import Header from '../header/header';
import PizzaList from '../list/list';
import { AUTH_HTTP_SERVICE } from '../../utils/auth-http';
import { PIZZA_LIST } from '../../utils/constants';
import { toHtml } from '../../utils/utils';

class App extends Component {
	constructor(props) {
		super(props);
		this.host = document.createElement('div');
		this.host.classList.add('app');
		this.header = new Header();
		this.list = new PizzaList();
		this.footer = new Footer();
		this.getPizzaList();
	}

	getPizzaList() {
		return AUTH_HTTP_SERVICE.get(PIZZA_LIST).then(res => {
			this.list.update({
				pizzas: res.results,
			});
		});
	}

	render() {
		const containerString = `
		<main class="main pizza">
            <div class="container pizza__container">
                <a href="#/create" class="button pizza__add">add pizza</a>
            </div>
        </main>
		`;

		const containerFragment = toHtml(containerString);
		const container = containerFragment.querySelector('.pizza__container');

		container.append(this.list.update());

		return [this.header.update(), containerFragment, this.footer.update()];
	}
}

export default App;
