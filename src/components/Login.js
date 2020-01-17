import React from 'react'
import Adapter from '../utils/Adapter'

export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }
    
    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value })

    submitLogin = (e) => {
        e.preventDefault()
        Adapter.post('login', {...this.state})
            .then(res => res.json())
            .then(json => {
                // Note: ARCHITECTURE DECISION NEEDED. Should redux be used for project? See Trello board.
            })
            .catch(console.log)
    }

    render() {
        return (
          <form onSubmit={this.submitLogin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
            <button
              name="currentView"
              value="signup"
              onClick={this.props.handleChange}
            >
              New to SpellChecker?
            </button>
          </form>
        );
    }
}
