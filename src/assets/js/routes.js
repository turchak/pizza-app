import Login from './components/login';
import App from './components/app';
import Registration from './components/registration';
import User from './components/user';
import { authGuard } from './utils/auth.guard';

const routes = [
    {
        component: App,
        href: '',
        redirectTo: '/'
    },
    {
        component: App,
        href: '/'
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
        canActivate: authGuard
    }
];

export default routes;