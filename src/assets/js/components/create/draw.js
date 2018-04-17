import { DOMAIN } from '../../utils/constants';
import { Sprite } from './sprite';
import { RANDOM } from '../../utils/utils';

class Draw {
	constructor() {
		this.crust_pizza = 'https://pizza-tele.ga/static/images/pizza.png';
		this._loadImage = this._loadImage.bind(this);
	}

	onInit(data) {
		this.host = data.host;
		this.size = '60';
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.canvasWidth = 320;
		this.canvasHeight = 320;
		this.ingredients = data.ingredients;
		this.images = {};
		this.sprites = {};
		this.lastOptions = [];
		this.buffer = [];
		this.spritesPool = [];
		this.canvas.width = this.canvasWidth;
		this.canvas.height = this.canvasHeight;
		this._loadResources().then(resources => {
			resources.forEach(resource => (this.images[resource.name] = resource.image));
			this.host.append(this.canvas);
			this._startSet();
		});
	}

	_startSet() {
		this.spritesPool = [];
		// let pizza = new Sprite(this.images['pizza'], 160, 160, 300, 300);
		let pizza = new Sprite(
			this.images['pizza'],
			160,
			160,
			300 * `${parseInt(this.size)}` / 60,
			300 * `${parseInt(this.size)}` / 60
		);
		this.sprites['pizza'] = pizza;
		this.spritesPool.push(pizza);
		this._draw();
	}

	handleClick(options, size) {
		this.size = size;
		this._startSet();
		if (options.length == this.buffer.length) {
			this.buffer.forEach(elem => {
				const filteredElem = elem.sprites.filter(elem => {
					if (this.size == 30) {
						return elem.x < 180 && elem.x > 110 && elem.y > 110 && elem.y < 180;
					}
					if (this.size == 45) {
						return elem.x < 200 && elem.x > 90 && elem.y > 90 && elem.y < 200;
					}
					if (this.size == 60) {
						return elem.x < 255 && elem.x > 40 && elem.y > 40 && elem.y < 255;
					}
				});
				this.spritesPool = this.spritesPool.concat(filteredElem);
			});
			this._draw();
		}

		if (options.length < this.buffer.length) {
			let preBuffer = [];
			this.lastOptions = [];
			options.forEach(el => {
				this.lastOptions.push(el);
				this.buffer.forEach(elem => {
					if (elem.id === el) {
						preBuffer.push({
							id: elem.id,
							sprites: elem.sprites,
						});
						const filteredElem = elem.sprites.filter(elem => {
							if (this.size == 30) {
								return elem.x < 180 && elem.x > 110 && elem.y > 110 && elem.y < 180;
							}
							if (this.size == 45) {
								return elem.x < 200 && elem.x > 90 && elem.y > 90 && elem.y < 200;
							}
							if (this.size == 60) {
								return elem.x < 255 && elem.x > 40 && elem.y > 40 && elem.y < 255;
							}
						});
						this.spritesPool = this.spritesPool.concat(filteredElem);

						// this.spritesPool = this.spritesPool.concat(elem.sprites);
					}
				});
			});

			this.buffer = [];
			this.buffer = this.buffer.concat(preBuffer);
			this._draw();
		}
		if (options.length === 0) {
			this.buffer = [];
			this._startSet();
		} else {
			options.forEach(el => {
				if (this.lastOptions.includes(el)) {
					this._draw();
				} else {
					this.lastOptions.push(el);
					this._generateSprite(el, 10);
					this.buffer.forEach(el => {
						const filteredElem = el.sprites.filter(elem => {
							if (this.size == 30) {
								return elem.x < 180 && elem.x > 110 && elem.y > 110 && elem.y < 180;
							}
							if (this.size == 45) {
								return elem.x < 200 && elem.x > 90 && elem.y > 90 && elem.y < 200;
							}
							if (this.size == 60) {
								return elem.x < 255 && elem.x > 40 && elem.y > 40 && elem.y < 255;
							}
						});
						this.spritesPool = this.spritesPool.concat(filteredElem);
						// this.spritesPool = this.spritesPool.concat(elem.sprites);
					});
					this._draw();
				}
			});
		}
	}

	_generateSprite(name, count) {
		const sprites = [];
		for (let i = 1; i <= count; i++) {
			let ingredient = new Sprite(this.images[`${name}`], RANDOM(70, 250), RANDOM(70, 250));
			sprites.push(ingredient);
		}
		this.buffer.push({
			id: name,
			sprites: sprites,
		});
	}

	_draw() {
		this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
		this.spritesPool.forEach(sprite => sprite.draw(this.ctx));
	}

	_loadResources() {
		let promises = [];
		promises.push(this._loadImage('pizza', this.crust_pizza));
		promises = promises.concat(
			this.ingredients.map(ingredient => {
				let ingr_url = `${DOMAIN}/${ingredient.image_url}`;
				return this._loadImage(ingredient.name, ingr_url);
			})
		);
		return Promise.all(promises);
	}

	_loadImage(name, url) {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.onload = () => resolve({ name, image });
			image.onerror = e => reject(e);
			image.src = url;
			image.width = 20;
			image.height = 20;
			image.crossOrigin = '';
		});
	}
}

export const DRAW = new Draw();
