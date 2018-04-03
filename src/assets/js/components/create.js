import Component from '../framework/component';
import Header from './header';
import Footer from './footer';
import { CREATE_DATA } from '../utils/create.data';
import { toHtml } from '../utils/utils';

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

                const container = document.querySelector('.create__options');
                container.appendChild(this.showIngredients(CREATE_DATA.ingredients));
                
            });    
    }

    showIngredients(data) {
        console.log(data[0])
        const ingredientsString = `
            <form>
                <label>
                    <input type='text' name='name' required min='3' max='24'>
                    <span>${data[0].name}</span>
                </label>
            </form>
        `;
        const fragment = toHtml(ingredientsString);
        return fragment;
    }

    render() {
        const containerString = `
            <main class='create'>
                <div class='container'>
                    <h1>Create Pizza</h1>
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