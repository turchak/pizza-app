import { DOMAIN } from '../utils/constants'; 

class AuthService {
    constructor () {
        this._token = localStorage.getItem('token');
        this._claims = JSON.parse(localStorage.getItem('claims'));
        this.loginUrl = `${DOMAIN}/api/v1/user/login`; 
        this.storeUrl = `${DOMAIN}/api/v1/store/list`; 
        this.createUrl = `${DOMAIN}/api/v1/user/create`;
    }

    get token() {
        return this._token;
    }
    
    set token(token) {
        this._token = token;
        localStorage.setItem('token', token);
    }

    get claims() {
        return this._claims;
    }

    set claims(claims) {
        this._claims = claims;
        localStorage.setItem('claims', JSON.stringify(claims));
    }

    isAuthorized() {
        if (!localStorage.getItem('token')) return false;
        if (!this.tokenIsNotExpired()) {
            this.clearStorage();
            return false;
        }
        return true;
    }

    clearStorage() {
        this._claims = null;
        this._token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('claims');
    }

    tokenIsNotExpired() {
        if (!this.token) return false;
        return this.claims.exp*1000 > Date.now();
    }

    storeInfo() {
        return fetch(this.storeUrl)
            .then(res => res.json());
    }

    loginUser(data) {
        const options =  {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers().append('Content-type', 'application/json')
        };

        return fetch(this.loginUrl, options)
            .then(res => {
                if (res.ok) {
                    return res.json().then(answer => {
                        this.token = answer.token;
                        this.claims = this.parseJwtClaims(answer.token);
                        return Promise.resolve({ answer, status: res.status });
                    });
                } else {
                    return res.json().then(answer => Promise.reject({ answer, status: res.status }));
                }

            });
    }


    registerUser(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        return fetch(this.createUrl, options)
            .then(res => res.json());
    }

    parseJwtClaims(jwtToken) {
        if (jwtToken) {
            let base64Url = jwtToken.split('.')[1]
            let base64 = base64Url.replace('-', '+').replace('_', '/')
            return JSON.parse(window.atob(base64));
        }
        return {};
    }
}

export const AUTH_SERVICE = new AuthService();  