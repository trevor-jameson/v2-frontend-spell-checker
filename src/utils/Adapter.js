export default class Adapter {

    static REQUEST_CONFIG = {
        headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json'
        },
        

            }

    static post(endpoint, body) {
        return fetch(this.REQUEST_CONFIG.BACKEND_URL + endpoint, {
            method: 'POST',
            headers: this.HEADERS,
            body
        })
    }
}