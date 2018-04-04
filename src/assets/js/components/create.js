import Component from '../framework/component';
import Header from './header';
import Footer from './footer';
import { CREATE_DATA } from '../utils/create.data';
import { toHtml } from '../utils/utils';
import { DOMAIN } from '../utils/constants';

class NewPizza extends Component {
    constructor(props) {
        super(props);
        this.host = document.createElement('div');
        this.host.classList.add('create-container');
        this.header = new Header();
        this.footer = new Footer();
        this.showForm();
    }

    showForm() {
        Promise.all([CREATE_DATA.getIngredients(), CREATE_DATA.getTags()])
            .then(() => {
                console.log(CREATE_DATA)

                const container = document.querySelector('.create__options');
                const form  = document.createElement('form');
                container.appendChild(form);
                form.appendChild(this.showIngredients(CREATE_DATA.ingredients));
                form.appendChild(this.showTags(CREATE_DATA.tags));
                
            });    
    }

    showIngredients(data) {
        const ingredientsString = `
                <label>
                    <span class='create__title'>Pizza Name</span>
                    <input type='text' name='name' required min='3' max='24'>
                </label>
                <label>
                    <span>Description</span>
                    <input type='text' name='description'>
                </label>
                <label>
                    <span>Size<span>
                    <label>
                        <span>30</span>
                        <input type='radio' name='size' value='30'>
                    </label>
                    <label>
                        <span>45</span>
                        <input type='radio' name='size' value='30'>
                    </label>
                    <label>
                        <span>60</span>
                        <input type='radio' name='size' value='30'>
                    </label>    
                </label>
                <div class='create__ingredients'>${data.reduce((html, data) => {
                    html += `
                        <label class='create__ingredients-item'>
                            <input class='create__ingredients-input' type='checkbox'>
                            <img src='${DOMAIN}/${data.image_url}' class='create__ingredients' title='${data.description}'>
                        </label>
                        `;
                    return html;
                },'')}
                </div>
        `;
        const fragment = toHtml(ingredientsString);
        return fragment;
    }

    showTags(data) {
        const tagsString = `
                <div class='create__tags'>${data.reduce((html, data) => {
                    html += `
                        <label class='create__tags-item'>
                            <span>${data.name}</span>
                            <input type='checkbox'>
                        </label>
                        `;
                    return html;
                },'')}
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

        return [
            this.header.update(),
            fragment,
            this.footer.update()
        ]
    }
}

export default NewPizza;