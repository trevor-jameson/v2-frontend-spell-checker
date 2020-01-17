import React from 'react'
import Adapter from '../utils/Adapter'

import { UserContext } from '../index.js'

export default class Login extends React.Component {

    state = {
        username: '',
        password: '',
    }

    
    
    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    
    render() {
        return (
          <div id='login-form'>
            <form onSubmit={(e) => Adapter.submitLoginOrSignupForm(e, 'login', this.state) }>
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
            </form>
              <button
                name="currentView"
                value="signup"
                onClick={this.props.handleChange}
                >
                New to SpellChecker?
              </button>
              </div>
        );
    }
}
