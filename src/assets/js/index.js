import '../scss/app.scss';
import Router from './framework/router';
import routes from './routes';

export const APP_ROUTER = new Router({ host: document.querySelector('#root'), routes });
