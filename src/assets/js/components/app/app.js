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
		WS.subscribe('CREATE_PIZZA', data => {
			CREATE_DATA.addPizza(data);
			return this.updateList();
		});
		WS.subscribe('ACCEPT_PIZZA', data => {
			CREATE_DATA.removePizza(data);
			return this.updateList();
		});

		CREATE_DATA.getUnacceptedPizzas(true, 12, 0).then(res => {
			return this.updateList();
		});
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
