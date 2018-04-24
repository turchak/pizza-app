import Component from '../../framework/component';
import { CREATE_DATA } from '../../utils/pizza.data';
import { toHtml } from '../../utils/utils';

export class Price extends Component {
	constructor(props) {
		super(props);
		this.host = document.createElement('div');
		this.host.classList.add('price');
	}

	calcPrice(condition) {
		const data = CREATE_DATA.ingredients;
		const { size, ingredients } = condition;
		let price = '0.00';

		if (ingredients.length !== 0) {
			const sum = [];
			ingredients.forEach(ingredient => {
				sum.push(data[ingredient - 1].price);
			});
			price = sum
				.reduce((prev, curr) => {
					return prev + curr;
				}, size / 5)
				.toFixed(2);
		}

		return price;
	}

	render() {
		const { condition } = this.props;

		const priceString = `
            <span>Price:</span>
            <span class='price__amount'>$ ${this.calcPrice(condition)}</span>
	    `;
		const priceFragment = toHtml(priceString);
		return priceFragment;
	}
}
