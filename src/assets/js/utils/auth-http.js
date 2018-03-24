import { AUTH_SERVICE } from './auth';

class AuthHttpService {
    
    get(url, options) {
        if (!AUTH_SERVICE.isAuthorized) {
            throw new Error("Non-authorized request")
        }

        
        return fetch(url, options);
    }

    getUserInfo() {
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${AUTH_SERVICE.token}`);
        headers.append('content-type', 'application/json');
        const url = 'https://pizza-tele.ga/api/v1/user/my_info';
        const options = {
            method: 'GET',
            headers: headers
        };
        console.log(this.headers);
        return this.get(url, options).then(res => {
            return res.json();
        });
    }

    post() {

    }

    patch() {

    }
}

export const AUTH_HTTP_SERVICE = new AuthHttpService();