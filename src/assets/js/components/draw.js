import { DOMAIN } from '../utils/constants';
import { Sprite } from './sprite';
import { RANDOM } from '../utils/utils';

class Draw {
    constructor() {
        this.crust_pizza = 'https://pizza-tele.ga/static/images/pizza.png';
        this._loadImage = this._loadImage.bind(this);
    }

    onInit(data) {
        this.host = data.host;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = 320;
        this.canvasHeight = 320;
        this.ingredients = data.ingredients;
        this.images = {};
        this.sprites = {};
        this.spritesPool = [];
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this._loadResources().then(
            (resources) => {
                resources.forEach(resource => this.images[resource.name] = resource.image);
                this.host.append(this.canvas);
                this._startSet();
            }
        );
    }

    _startSet() {
        this.spritesPool = [];
        let pizza = new Sprite(this.images['pizza'], 160, 160, 300, 300);
        this.sprites['pizza'] = pizza;
        this.spritesPool.push(pizza);
        this._draw();
    }

    handleClick(options) {
        this._startSet();
        if(options.length === 0) {
            this._startSet();
        } else {
            options.forEach(el => {
                this._print(el, 15);
            });
        }   
    }

    _print(name, count) {
        for(let i = 1; i <= count; i++) {
            let ingredient = new Sprite(this.images[`${name}`], RANDOM(80, 240), RANDOM(80, 240));
            this.spritesPool.push(ingredient); 
        }
        this._draw();
    }

    _draw() {
        this.ctx.clearRect(0,0,this.canvasWidth, this.canvasHeight);
        this.spritesPool.forEach(sprite => sprite.draw(this.ctx));
    }

    _loadResources() {
        let promises = [];
        promises.push(this._loadImage("pizza", this.crust_pizza));
        promises = promises.concat(this.ingredients.map(ingredient => {
            let ingr_url = `${DOMAIN}/${ingredient.image_url}`;
            return this._loadImage(ingredient.name, ingr_url);
        }));
        return Promise.all(promises);
    }

    _loadImage(name, url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve({name, image});
            image.onerror = (e) => reject(e);
            image.src = url;
        });
    }
}

export const DRAW = new Draw();