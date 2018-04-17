import Component from '../framework/component';
import Header from './header';
import Footer from './footer';
import { CREATE_DATA } from '../utils/create.data';
import { toHtml } from '../utils/utils';
import { DOMAIN, CREATE_PIZZA } from '../utils/constants';
import { DRAW } from './draw';
import { AUTH_HTTP_SERVICE } from '../utils/auth-http';

class NewPizza extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: '60',
			options: [],
			ingredients: [],
			tags: [],
		};
		this.host = document.createElement('div');
		this.host.classList.add('create-container');
		this.header = new Header();
		this.footer = new Footer();
		this.handleClick = this.handleClick.bind(this);
		this.handleResize = this.handleResize.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderData();
	}

	handleSubmit(ev) {
		ev.preventDefault();
		const { size, ingredients, tags } = this.state;
		const canvas = document.querySelector('canvas');
		const name = document.querySelector('.create__name-value');
		const description = document.querySelector('.create__description');

		const fd = new FormData();
		fd.append('name', name.value);
		fd.append('description', description.value);
		fd.append('size', size);
		fd.append('ingredients', JSON.stringify(ingredients));
		fd.append('tags', JSON.stringify(tags));

		canvas.toBlob(blob => {
			fd.append('image', blob, 'new_image.png');
			return AUTH_HTTP_SERVICE.post(CREATE_PIZZA, fd).then(result => console.log(result));
		});
	}

	renderData() {
		Promise.all([CREATE_DATA.getIngredients(), CREATE_DATA.getTags()]).then(() => {
			const container = document.querySelector('.create__options');
			container.addEventListener('change', this.handleClick);
			let canvas = document.querySelector('.create__canvas');
			const form = document.createElement('form');
			const buttonsString = `
                    <div class='create__button'>
                        <button class='button create__button-cancel' type='button'>cancel</button>
                        <button class='button create__button-send' type='submit'>create</button>
                    </div>
                `;
			const buttons = toHtml(buttonsString);
			form.addEventListener('submit', this.handleSubmit);
			container.appendChild(form);
			form.append(this.renderForm());
			form.appendChild(this.renderIngredients(CREATE_DATA.ingredients));
			form.appendChild(this.renderTags(CREATE_DATA.tags));
			form.appendChild(buttons);
			DRAW.onInit({
				host: canvas,
				ingredients: CREATE_DATA.ingredients,
			});
		});
	}

	handleClick(ev) {
		if (ev.target.dataset.flag === 'ingredient') {
			const ingredientsInputs = document.querySelectorAll('[data-flag]');
			const newOptions = [];
			const newIngredients = [];
			ingredientsInputs.forEach(ingredientInput => {
				if (ingredientInput.checked) {
					newOptions.push(ingredientInput.value);
					newIngredients.push(parseInt(ingredientInput.dataset.id));
				}
			});

			this.state = Object.assign({}, this.state, {
				options: newOptions,
			});
			this.state = Object.assign({}, this.state, {
				ingredients: newIngredients,
			});
			// console.log(this.state);
			const { size, options } = this.state;
			DRAW.handleClick(options, size);
		}
		return false;
	}

	handleResize(ev) {
		if (ev.target.dataset.attr === 'size') {
			const sizeFields = document.querySelectorAll('[data-attr]');
			sizeFields.forEach(sizeField => {
				if (sizeField.checked) {
					const newSize = sizeField.value;
					this.state = Object.assign({}, this.state, {
						size: newSize,
					});
				}
			});
			let { size, options } = this.state;
			DRAW.handleClick(options, size);
		}
	}

	renderForm() {
		const formString = `
        <label>
            <span class='create__name'>Pizza Name</span>
            <input type='text' name='name' required min='3' max='24' class='create__name-value'>
        </label>
        <label>
            <span>Description</span>
            <textarea class='create__description'></textarea>
        </label>
        <label class='create__size'>
            <span class='create__size-title'>Size</span>
            <label class='create__size-option'>
                <span>30</span>
                <input class='create__size-option-value' type='radio' name='size' value='30' data-attr='size'>
                <i class="fas fa-circle create__size-option--small"></i>
            </label>
            <label class='create__size-option'>
                <span>45</span>
                <input class='create__size-option-value' type='radio' name='size' value='45' data-attr='size'>
                <i class="fas fa-circle create__size-option--medium"></i>
            </label>
            <label class='create__size-option'>
                <span>60</span>
                <input class='create__size-option-value' type='radio' name='size' value='60' data-attr='size' checked>
                <i class="fas fa-circle create__size-option--large"></i>
            </label>    
        </label>
            <h2 class='create__ingredients-title'>Ingredients<h2>
        `;

		const form = toHtml(formString);
		const sizeFields = form.querySelector('.create__size');
		sizeFields.addEventListener('change', this.handleResize);
		return form;
	}

	renderIngredients(data) {
		const ingredientsString = `   
                <div class='create__ingredients'>${data.reduce((html, data) => {
		html += `
                        <label class='create__ingredients-item'>
                            <input class='create__ingredients-input' type='checkbox' value='${
	data.name
}' data-flag='ingredient' data-id='${data.id}'>
                            <img src='${DOMAIN}/${
	data.image_url
}' class='create__ingredients' title='${data.description}' data-name='ingredient'>
                            <span>${data.name}</span>
                        </label>
                        `;
		return html;
	}, '')}
                </div>
                <h2 class='create__tag-title'>Tag<h2>
        `;
		const fragment = toHtml(ingredientsString);
		return fragment;
	}

	renderTags(data) {
		const tagsString = `
                <div class='create__tags'>${data.reduce((html, data) => {
		html += `
                        <label class='create__tags-item'>
                            <input type='checkbox'>
                            <span>${data.name}</span>
                        </label>
                        `;
		return html;
	}, '')}
                </div>
        `;
		const fragment = toHtml(tagsString);
		return fragment;
	}

	render() {
		const containerString = `
            <main class='create'>
                <div class='container create__container'>
                    <h1 class='create__title'>Create Pizza</h1>
                    <section class='create__canvas'></section>
                    <section class='create__options'></section>
                </div>
            </main>
        `;
		const fragment = toHtml(containerString);

		return [this.header.update(), fragment, this.footer.update()];
	}
}

export default NewPizza;
