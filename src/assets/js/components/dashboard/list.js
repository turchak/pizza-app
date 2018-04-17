import Component from '../../framework/component';
import { toHtml } from '../../utils/utils';
import { AUTH_HTTP_SERVICE } from '../../utils/auth-http';
import { PIZZA_LIST, DOMAIN } from '../../utils/constants';

class PizzaList extends Component {
	constructor(props) {
		super(props);
		this.host = document.createElement('div');
		this.host.classList.add('list');
		this.pizzas = [];
	}

	getPizzaList(container) {
		AUTH_HTTP_SERVICE.get(PIZZA_LIST).then(res => {
			const result = res.results;
			result.forEach(el => {
				this.pizzas.push(el);
			});
			const pizzaList = this.createPizza(this.pizzas);
			container.appendChild(pizzaList);
			return container;
		});
	}

	createPizza(pizzas) {
		const container = document.createElement('section');
		const list = pizza => {
			return `
            <article class="pizza">
                <img class="pizza__img" src="${DOMAIN}/${pizza.img_url}" alt="${pizza.name}">
                <h2 class="pizza__name">${pizza.name}</h2>
                <time class="pizza__time" datetime="${pizza.time_prepared}">${
	pizza.time_prepared
}</time>
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
        <div class='list-container'>
            
        </div>
        `;

		const fragment = toHtml(containerString);
		const container = fragment.querySelector('.list-container');

		this.getPizzaList(container);

		return fragment;
	}
}
export default PizzaList;
