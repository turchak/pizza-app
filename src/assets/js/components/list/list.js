import Component from '../../framework/component';
import { toHtml } from '../../utils/utils';
import { DOMAIN } from '../../utils/constants';

class PizzaList extends Component {
	constructor(props) {
		super(props);
		this.host = document.createElement('div');
		this.host.classList.add('list');
	}

	createPizza(pizzas) {
		const container = document.createElement('section');
		const list = pizza => {
			return `
            <article class="pizza">
                <img class="pizza__img" src="${DOMAIN}/${pizza.img_url}" alt="${pizza.name}">
                <h2 class="pizza__name">${pizza.name}</h2>
				<time class="pizza__time" datetime="
				${pizza.time_prepared}">${pizza.time_prepared}</time>
                <span class="pizza__queue-number">#1</span>
                <div class="pizza__eta">
                    <span>eta</span>
                    <time datetime="04:00">4</time>
                    <span>min</span>
                </div>
                <div class="pizza__price">
                    <span>$</span>
                    <span>${pizza.price}</span>
                </div>
            </article> 
            `;
		};

		pizzas.forEach(pizza => {
			container.innerHTML += list(pizza);
		});

		return container;
	}

	render() {
		const containerString = `
		<div class="container list__container">
        </div>
		`;

		const containerFragment = toHtml(containerString);
		const container = containerFragment.querySelector('.list__container');

		if (this.props) {
			const { pizzas } = this.props;

			if (pizzas.length === 0) {
				container.innerText = '';
			} else {
				container.append(this.createPizza(pizzas));
			}
		}

		return container;
	}
}
export default PizzaList;
