import '../scss/app.scss';
import Router from './framework/router';
import routes from './routes';

const router = new Router({ host: document.querySelector('#root'), routes });
