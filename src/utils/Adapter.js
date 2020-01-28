import { setAuthenticatedUser } from '../redux/actionCreators'
import { boundDispatch } from '../redux/store'

export default class Adapter {

    static BACKEND_URL = 'http://localhost:3001/'

    static REQUEST_CONFIG = {
        HEADERS: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }

    static get(endpoint) {
        const headers = {...this.REQUEST_CONFIG.HEADERS}
        headers.Authorization = window.localStorage.getItem('jwt')

        return fetch(this.BACKEND_URL + endpoint, {
            headers
        })
    }

    static post(endpoint, body) {

        // Destructuring headers object to prevent accidental mutation
        const headers = {...this.REQUEST_CONFIG.HEADERS}

        // Add jwt token to request, if not logging in or signing up
        if ((endpoint !== 'login') && (endpoint !== 'signup')) {headers.Authorization = window.localStorage.getItem('jwt')}

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
                // User JWT is set in localStorage to persist through browser session
                window.localStorage.setItem('jwt', res.jwt)
                // Note: On page reload, user will have to login to fire userAuth dispatch,
                // otherwise they'll have JWT but no user data
                boundDispatch(setAuthenticatedUser(res.user))
                window.location.href ='/spells'
            })
            // TODO: Raise error message to user upon 400 response code
            .catch(console.log)
    }
}