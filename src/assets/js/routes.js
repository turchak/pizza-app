import Login from './components/login';
import App from './components/app';
import Registration from './components/registration';
import User from './components/user';
import NewPizza from './components/create';
import { authGuard } from './utils/auth.guard';
import { AUTH_SERVICE } from './utils/auth';

const routes = [
	{
		Component: App,
		href: '',
		redirectTo: '/',
	},
	{
		Component: App,
		href: '/',
		onEnter: authGuard,
	},
	{
		Component: Login,
		href: '/login',
	},
	{
		Component: Registration,
		href: '/registration',
	},
	{
		Component: User,
		href: '/user',
		onEnter: authGuard,
	},
	{
		Component: App,
		href: '/logout',
		logout: AUTH_SERVICE.clearStorage,
		onEnter: authGuard,
	},
	{
		Component: NewPizza,
		href: '/create',
		onEnter: authGuard,
	},
];

export default routes;
