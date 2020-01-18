export default class Adapter {

    static BACKEND_URL = 'http://localhost:3001/'

    static REQUEST_CONFIG = {
        HEADERS: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }

    static post(endpoint, body) {

        // Destructure headers object to prevent accidental mutation
        const headers = {...this.REQUEST_CONFIG.HEADERS}

        // Add jwt token to request, if not logging in or signing up
        if ((endpoint !== 'login') && (endpoint !== 'signup')) {headers.jwt = window.localStorage.getItem('jwt')}

        return fetch(this.BACKEND_URL + endpoint, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            }
        )
    }

    static submitLoginOrSignup(e, endpoint, body) {
        e.preventDefault()

        // Destructure object from state ref and nest under required "user" key
        this.post(endpoint, { user: {...body} })
            .then(res => res.json())
            .then(res => {
                window.localStorage.setItem('jwt', res.jwt)
                console.log(res)
                // NOTE: Architectural decision needed on where to store global state
            })
            .catch(console.log)
    }
}