import Component from '../../framework/component';
import Header from '../header/header';
import Footer from '../footer/footer';
import { CREATE_DATA } from '../../utils/pizza.data';
import { toHtml } from '../../utils/utils';
import { DOMAIN, CREATE_PIZZA } from '../../utils/constants';
import { DRAW } from './draw';
import { AUTH_HTTP_SERVICE } from '../../utils/auth.http';
import { Price } from '../price/price';

class NewPizza extends Component {
	constructor(props) {
		super(props);
		this.condition = {
			size: '60',
			options: [],
			ingredients: [],
			tags: [],
		};
		this.host = document.createElement('div');
		this.host.classList.add('create-container');
		this.price = new Price();
		this.header = new Header();
		this.footer = new Footer();
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onInit() {
		Promise.all([CREATE_DATA.getIngredients(), CREATE_DATA.getTags()]).then(() => {
			const container = document.querySelector('.create__options');
			const canvas = document.querySelector('.create__canvas');

			container.addEventListener('change', this.handleClick);

			const form = document.createElement('form');
			const buttonsString = `
            	<div class='create__button'>
                	<button class='button create__button-cancel' type='button'>cancel</button>
                 	<button class='button create__button-send' type='submit'>create</button>
            	</div>
                `;
			const buttonsFragment = toHtml(buttonsString);
			const buttons = buttonsFragment.querySelector('.create__button');
			buttons.addEventListener('click', this.handleClick);
			form.addEventListener('submit', this.handleSubmit);
			container.append(form);
			form.append(this.renderForm());
			form.append(this.renderIngredients(CREATE_DATA.ingredients));
			form.append(this.renderTags(CREATE_DATA.tags));
			form.append(this.price.update({ condition: this.condition }));
			form.append(buttonsFragment);

			DRAW.onInit({
				host: canvas,
				ingredients: CREATE_DATA.ingredients,
			});
		});
	}

	handleSubmit(ev) {
		ev.preventDefault();
		const { size, ingredients, tags } = this.condition;
		const canvas = document.querySelector('canvas');
		const name = document.querySelector('.create__name-value');
		const description = document.querySelector('.create__description');

		const fd = new FormData();
		fd.append('name', name.value);
		fd.append('description', description.value);
		fd.append('size', size);
		fd.append('ingredients', JSON.stringify(ingredients));
		fd.append('tags', JSON.stringify(tags));
		console.log(canvas)
		canvas.toBlob(blob => {
			fd.append('image', blob, 'new_image.png');
			return AUTH_HTTP_SERVICE.post(CREATE_PIZZA, fd).then(result => console.log(result));
		});
	}

	handleClick(ev) {
		if (ev.target.dataset.flag === 'size') {
			const sizes = document.querySelectorAll('input[data-flag="size"]');
			sizes.forEach(size => {
				if (size.checked) {
					const newSize = size.value;
					this.condition = Object.assign({}, this.condition, {
						size: newSize,
					});
				}
			});
			const { size, options } = this.condition;
			DRAW.handleClick(options, size);
			this.price.update({ condition: this.condition });
		}

		if (ev.target.dataset.flag === 'ingredient') {
			const newOptions = [];
			const newIngredients = [];
			const ingredients = document.querySelectorAll('input[data-flag="ingredient"]');
			ingredients.forEach(ingredient => {
				if (ingredient.checked) {
					newOptions.push(ingredient.value);
					newIngredients.push(parseInt(ingredient.dataset.id));
				}
			});

			this.condition = Object.assign({}, this.condition, {
				options: newOptions,
				ingredients: newIngredients,
			});

			const { size, options } = this.condition;
			DRAW.handleClick(options, size);
			this.price.update({ condition: this.condition });
		}

		if (ev.target.dataset.flag === 'tag') {
			const newTags = [];
			const tags = document.querySelectorAll('input[data-flag="tag"]');
			tags.forEach(tag => {
				if (tag.checked) {
					newTags.push(parseInt(tag.dataset.id));
				}

				this.condition = Object.assign({}, this.condition, {
					tags: newTags,
				});
			});
		}

		if (ev.target.className === 'button create__button-cancel') {
			window.location.hash = '/';
		}

		return false;
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
                <input class='create__size-option-value' type='radio' name='size' value='30' data-flag='size'>
                <i class="fas fa-circle create__size-option--small"></i>
            </label>
            <label class='create__size-option'>
                <span>45</span>
                <input class='create__size-option-value' type='radio' name='size' value='45' data-flag='size'>
                <i class="fas fa-circle create__size-option--medium"></i>
            </label>
            <label class='create__size-option'>
                <span>60</span>
                <input class='create__size-option-value' type='radio' name='size' value='60' data-flag='size' checked>
                <i class="fas fa-circle create__size-option--large"></i>
            </label>    
        </label>
        <span class='create__ingredients-title'>Ingredients<span>
        `;

		const formFragment = toHtml(formString);
		return formFragment;
	}

	renderIngredients(data) {
		const ingredientsString = `   
        <div class='create__ingredients'>${data.reduce((html, data) => {
		html += `
        	<label class='create__ingredients-item'>
				<input class='create__ingredients-input' type='checkbox' value='${data.name}' data-flag='ingredient' data-id='${data.id}'>
				<img src='${DOMAIN}/${data.image_url}' class='create__ingredients' title='${data.description}' data-name='ingredient'>
            	<span>${data.name}</span>
        	</label>`;
		return html;
	}, '')}
        </div>
        <span class='create__tags-title'>Tag<span>
        `;
		const ingredientsFragment = toHtml(ingredientsString);
		return ingredientsFragment;
	}

	renderTags(data) {
		const tagsString = `
        <div class='create__tags'>${data.reduce((html, data) => {
		html += `
        <label class='create__tags-item' for=${data.name}>
			<input type='checkbox' id=${data.name} data-id=${data.id} data-flag='tag'>
			<i class="far fa-square create__tags-icon create__tags-icon--unchecked"></i>
			<i class="far fa-check-square create__tags-icon create__tags-icon--checked"></i>
            <span>${data.name}</span>
        </label>
                `;
		return html;
	}, '')}
                </div>
        `;
		const tagsFragment = toHtml(tagsString);
		return tagsFragment;
	}

	render() {
		const containerString = `
            <main class='create' id='create'>
                <div class='container create__container'>
					<h1 class='create__title'>Create Pizza</h1>
                    <section class='create__canvas'></section>
                    <section class='create__options'></section>
                </div>
            </main>
        `;
		const containerFragment = toHtml(containerString);

		return [this.header.update(), containerFragment, this.footer.update()];
	}
}

export default NewPizza;
