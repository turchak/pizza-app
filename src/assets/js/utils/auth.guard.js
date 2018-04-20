import { AUTH_SERVICE } from '../utils/auth';

export const authGuard = param => {
	return AUTH_SERVICE.isAuthorized()
		? Promise.resolve({ success: true, route: param })
		: Promise.resolve({ success: false, redirect: '/login' });
};
