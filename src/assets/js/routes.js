import Login from './components/login/login';
import App from './components/app/app';
import Registration from './components/registration/registration';
import User from './components/user/user';
import NewPizza from './components/create/create';
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
