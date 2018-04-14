import { AUTH_SERVICE } from './auth';

class AuthHttpService {
    
    get(url) {
        if (!AUTH_SERVICE.isAuthorized) {
            throw new Error("Non-authorized request")
        }
        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${AUTH_SERVICE.token}`,
                'content-type': 'application/json'
            })
        }).then(
            response => Promise.resolve(response.json()), 
            response => Promise.reject(response.statusCode)
        );
    }

    post(url, data) {
        return fetch(url, {
            method: 'POST',
            body: data,
            headers: new Headers({
                'Authorization': `Bearer ${AUTH_SERVICE.token}`
            })
        }).then(
            response => Promise.resolve(response.json()), 
            response => Promise.reject(response.statusCode)
        )

    }

    patch() {

    }
}

export const AUTH_HTTP_SERVICE = new AuthHttpService();