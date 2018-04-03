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

    // getUserInfo() {
    //     const headers = new Headers();
    //     headers.append('Authorization', `Bearer ${AUTH_SERVICE.token}`);
    //     headers.append('content-type', 'application/json');
    //     const url = 'https://pizza-tele.ga/api/v1/user/my_info';
    //     const options = {
    //         method: 'GET',
    //         headers: headers
    //     };
    //     return this.get(url).then(res => {
    //         return res.json();
    //     });
    // }

    post() {

    }

    patch() {

    }
}

export const AUTH_HTTP_SERVICE = new AuthHttpService();