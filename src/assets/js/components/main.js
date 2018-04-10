import Component from '../framework/component';
import { img } from '../utils/image';

//TODO: hardcore
const pizzas = [
    {
        title: 'Bavarian',
        url: img.bavarian
    },
    {
        title: 'Chicken with mushrooms',
        url: img.chickenWithMushrooms
    },
    {
        title: 'Chicken with pineapple',
        url: img.chickenWithPineapple
    },
    {
        title: 'Fruit',
        url: img.fruit
    },
    {
        title: 'Margherita',
        url: img.margherita
    },
    {
        title: 'Turkey',
        url: img.turkey
    },
    {
        title: 'Pepperoni',
        url: img.pepperoni
    },
    {
        title: 'Prosciutto',
        url: img.prosciutto
    },
    {
        title: 'Zucchini',
        url: img.zucchini
    },
]


class Main extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('main');
        this.host.classList.add('main');
    }

    createPizza(pizzas) {
        const container = document.createElement('section');
        const list = (title, url) => {
            return `
            <article class="pizza">
                <img class="pizza__img" src="${url}" alt="pizza-photo">
                <h2 class="pizza__name">${title}</h2>
                <time class="pizza__time" datetime="2018-01-31T19:00">12:01:48</time>
                <span class="pizza__queue-number">#1</span>
                <div class="pizza__eta">
                    <span>eta</span>
                    <time datetime="04:00">4</time>
                    <span>min</span>
                </div>
                <div class="pizza__price">
                    <span>$</span>
                    <span>10</span>
                </div>
            </article> 
        `;
        };    

        pizzas.forEach(el => {
            container.innerHTML += list(el.title, el.url);
        });

        return container;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('container');
        const a = document.createElement('a');
        a.href = '#/create';
        a.className = 'button add-link';
        a.innerText = 'add new pizza';

        container.append(a, this.createPizza(pizzas));
        return [
            container,
        ];
    }
}

export default Main;