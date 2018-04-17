import Component from '../framework/component';
import PizzaList from './list';
import { toHtml } from '../utils/utils';

class Main extends Component {
	constructor(props) {
		super(props);
		this.pizzaList = new PizzaList();
		this.host = document.createElement('main');
		this.host.classList.add('main');
	}

	render() {
		const container = document.createElement('div');
		container.className = 'container dashboard__container';

		const addPizzaString = `
		<a href='#/create' class='button pizza__add'>add pizza</a>
		`;
		const addPizza = toHtml(addPizzaString);
		container.append(addPizza, this.pizzaList.update());
		return [container];
	}
}

export default Main;
