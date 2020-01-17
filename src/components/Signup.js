import React, { Fragment } from 'react'
// Could import single components instead of Adapter class to reduce bundle size,
// but Adapter#method syntax helps with readability
import Adapter from '../utils/Adapter';

export default class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
    }

    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value })

    render() {
        return (
          <Fragment>
            <form onSubmit={(e => Adapter.submitLoginOrSignupForm(e, 'signup', this.state) )}>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password: </label>
              <input
                type="text"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <label htmlFor="passwordConfirmation">
                Password Confirmation:{" "}
              </label>
              <input
                type="text"
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
            <button
              name="currentView"
              value="login"
              onClick={this.props.handleChange}
            >
              Already have an account?
            </button>
          </Fragment>
        );
    }
}
