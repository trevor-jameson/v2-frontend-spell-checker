// import { connect } from 'react-redux'
import { setAuthenticatedUser } from '../redux/actions/userActions'
import store from '../redux/store'

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

        // Destructure headers object to prevent accidental mutation
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
                window.localStorage.setItem('jwt', res.jwt)
                console.log(res)
                // Breaking conventional pattern by dispatching action from Class.method
                store.dispatch(setAuthenticatedUser(res.user))
                
                // Redirect to /spells route
                window.location.href = '/spells'
            })
            .catch(console.log)
    }
}