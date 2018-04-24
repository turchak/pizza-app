import Component from '../../framework/component';
import Footer from '../footer/footer';
import Header from '../header/header';
import PizzaList from '../list/list';
import { toHtml } from '../../utils/utils';
import { CREATE_DATA } from '../../utils/pizza.data';
import { WS } from '../../utils/ws';

class App extends Component {
	constructor(props) {
		super(props);
		this.host = document.createElement('div');
		this.host.classList.add('app');
		this.header = new Header();
		this.list = new PizzaList();
		this.footer = new Footer();
	}

	onInit() {
		WS.establish();

		this.unsubscribeAdd = this.subscribe({
			event: 'CREATE_PIZZA',
			method: CREATE_DATA.addPizza,
		});

		this.unsubscribeRemove = this.subscribe({
			event: 'ACCEPT_PIZZA',
			method: CREATE_DATA.removePizza,
		});

		CREATE_DATA.getUnacceptedPizzas(true, 12, 0).then(res => {
			return this.updateList();
		});
	}

	subscribe(param) {
		let { event, method } = param;

		const unsubscribe = WS.subscribe(event, data => {
			method(data);
			this.updateList();
		});
		return unsubscribe;
	}

	onBeforeUnmount() {
		this.unsubscribeAdd();
		this.unsubscribeRemove();
	}

	updateList() {
		this.list.update({
			pizzas: CREATE_DATA.pizzas,
		});
	}

	render() {
		const containerString = `
		<main class="main pizzas">
            <div class="container pizzas__container">
                <a href="#/create" class="button add-link">add pizza</a>
            </div>
        </main>
		`;

		const containerFragment = toHtml(containerString);
		const container = containerFragment.querySelector('.pizzas__container');

		container.append(this.list.update());

		return [this.header.update(), containerFragment, this.footer.update()];
	}
}

export default App;
