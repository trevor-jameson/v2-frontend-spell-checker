import React from 'react'
import Adapter from '../../utils/Adapter'

export default class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
  }

  handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value })

  render() {
    return (
      <div id='signup-view'>
        <form onSubmit={(e) => Adapter.submitLoginOrSignup(e, 'signup', {...this.state})}> 
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label htmlFor="passwordConfirmation">Password Confirmation: </label>
          <input
            type="password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
          />
          <button type='submit' >Submit</button>
        </form>
        <button 
          onClick={this.props.changeView}
          name='currentView'
          value='login'
        >
          Already have an account?
        </button>
      </div>
    );
  }
}
