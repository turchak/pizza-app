import Component from '../framework/component';

//TODO: hardcore
const pizzas = [
    {
        title: 'Bavarian',
        url: 'bavarian'
    },
    {
        title: 'Chicken with mushrooms',
        url: 'chicken-with-mushrooms'
    },
    {
        title: 'Chicken with pineapple',
        url: 'chicken-with-pineapple'
    },
    {
        title: 'Fruit',
        url: 'fruit'
    },
    {
        title: 'Margherita',
        url: 'margherita'
    },
    {
        title: 'Turkey',
        url: 'turkey'
    },
    {
        title: 'Pepperoni',
        url: 'pepperoni'
    },
    {
        title: 'Prosciutto',
        url: 'prosciutto'
    },
    {
        title: 'Zucchini',
        url: 'zucchini'
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
                <img class="pizza__img" src="./assets/img/pizza-${url}.png" alt="pizza-photo">
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