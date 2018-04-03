import { AUTH_HTTP_SERVICE } from "./auth-http";
import { INGREDIENTS_URL, TAG_URL } from "./constants";

class PizzaDataService {
    constructor() {
        this.ingredients = [];
        this.tags = [];
    }

    getIngredients() {
        return AUTH_HTTP_SERVICE.get(INGREDIENTS_URL).then(
            data => {
                this.ingredients = data.results;
                return data.results;
            }  
        );
    }

    getTags() {
        return AUTH_HTTP_SERVICE.get(TAG_URL).then(
            data => {
                this.tags = data.results;
                return data.results;
            }  
        )
    }
}

export const CREATE_DATA = new PizzaDataService(); 