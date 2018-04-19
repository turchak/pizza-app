import { AUTH_HTTP_SERVICE } from './auth-http';
import { INGREDIENTS_URL, TAG_URL, PIZZA_LIST } from './constants';

class PizzaDataService {
	constructor() {
		this.ingredients = [];
		this.tags = [];
		this.pizzas = [];
	}

	addPizza(pizza) {
		if (
			this.pizzas.findIndex(p => {
				return pizza.uuid === p.uuid;
			}) != -1
		) {
			return false;
		}
		this.pizzas.unshift(pizza);
		return true;
	}

	getUnacceptedPizzas(reset, limit, offset) {
		return AUTH_HTTP_SERVICE.get(`${PIZZA_LIST}?limit=${limit || 100}&offset=${offset || 0}`).then(
			res => {
				if (reset) {
					this.pizzas = res.results;
				} else {
					this.pizzas = this.pizzas.concat(res.results);
				}
			}
		);
	}

	getIngredients() {
		return AUTH_HTTP_SERVICE.get(INGREDIENTS_URL).then(data => {
			this.ingredients = data.results;
			return data.results;
		});
	}

	getTags() {
		return AUTH_HTTP_SERVICE.get(TAG_URL).then(data => {
			this.tags = data.results;
			return data.results;
		});
	}
}

export const CREATE_DATA = new PizzaDataService();
