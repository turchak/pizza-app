import Login from './components/login';
import App from './components/app';
import Registration from './components/registration';
import User from './components/user';
import NewPizza from './components/create'
import { authGuard } from './utils/auth.guard';
import { AUTH_SERVICE } from './utils/auth';

const routes = [
    {
        component: App,
        href: '',
        redirectTo: '/'
    },
    {
        component: App,
        href: '/',
        onEnter: authGuard
    },
    {
        component: Login,
        href: '/login'
    },
    {
        component: Registration,
        href: '/registration'
    },
    {
        component: User,
        href: '/user',
        onEnter: authGuard
    },
    {
        component: App,
        href: '/logout',
        logout: AUTH_SERVICE.clearStorage,
        onEnter: authGuard
    },
    {
        component: NewPizza,
        href: '/create',
        onEnter: authGuard
    }
];

export default routes;