export default class Adapter {

    // 
    static REQUEST_CONFIG = {
    HEADERS: {
        "Accepts": "application/json",
        "Content-Type": "application/json"
    },
    BACKEND_URL: 'http://localhost:3001/'
    };

    static post(endpoint, body) {

        // Determine whether JWT header should be included in request
        // Deconstructing to avoid mutating cont
        let headers = {...this.REQUEST_CONFIG.HEADERS};
        if (endpoint !== "login" && endpoint !== "signup") {
            headers.jwt = window.sessionStorage.jwt;
        }

        return fetch(this.REQUEST_CONFIG.BACKEND_URL + endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        });
    }

    static submitLoginOrSignupForm(e, endpoint, body) {
    e.preventDefault();
    
    // Deconstruct body from state to avoid accidentally mutating
    this.post(endpoint, { ...body })
        .then(res => res.json())
        .then(json => {
        console.log(json);
        // Note: ARCHITECTURE DECISION NEEDED. Should redux be used for project? See Trello board.
        })
        .catch(console.log);
    };
}