import { AUTH_SERVICE } from './auth';

class AuthHttpService {
    get(url, headers) {
        if (!AUTH_SERVICE.isAuthorized) {
            throw new Error("Non-authorized rquest")
        }
        const headers = new Headers;
    }

    post() {

    }

    patch() {

    }
}

export const AUTH_SERVICE = new AuthHttpService();