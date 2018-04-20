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
		onEnter: {
			guard: authGuard,
		},
	},
	{
		Component: App,
		href: '/',
		onEnter: {
			guard: authGuard,
		},
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
		onEnter: {
			guard: authGuard,
		},
	},
	{
		href: '/logout',
		onEnter: {
			logout: true,
			guard: authGuard,
		},
	},
	{
		Component: NewPizza,
		href: '/create',
		onEnter: {
			guard: authGuard,
		},
	},
];

export default routes;
