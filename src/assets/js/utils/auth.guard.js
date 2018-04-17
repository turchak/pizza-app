import { AUTH_SERVICE } from '../utils/auth';

export const authGuard = () => {
	const result = AUTH_SERVICE.isAuthorized()
		? Promise.resolve({ success: true })
		: Promise.resolve({ success: false, redirect: '/login' });
	return result;
};
