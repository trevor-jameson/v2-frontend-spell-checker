<<<<<<< HEAD:src/components/Login.js
import React, { Fragment } from 'react'
import Adapter from '../utils/Adapter'
import '../styled_components/LandingFormWrapper'
import LandingFormWrapper from '../styled_components/LandingFormWrapper'
=======
import React from 'react'
import Adapter from '../../utils/Adapter'
>>>>>>> jest-lecture-prep:src/components/users/Login.js

class Login extends React.Component {
  state = {
      username: '',
      password: '',
  }

  handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value })

  render() {
    return (
      <Fragment>
        <form onSubmit={(e) => Adapter.submitLoginOrSignup(e, 'login', this.state)}>
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
          <button type='submit'>Submit</button>
        </form>
        <button
          name='currentView'
          value='signup'
          onClick={this.props.changeView}
          >
<<<<<<< HEAD:src/components/Login.js
          Signup to SpellChecker
=======
          Don't have an account?
>>>>>>> jest-lecture-prep:src/components/users/Login.js
        </button>
      </Fragment>
    );
  }
}

export default LandingFormWrapper(Login)