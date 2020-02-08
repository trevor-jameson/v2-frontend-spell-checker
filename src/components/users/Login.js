import React from 'react'
import Adapter from '../../utils/Adapter'

export default class Login extends React.Component {
  state = {
      username: '',
      password: '',
  }

  handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value })

  render() {
    return (
      <div id='login-view'>
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
          Don't have an account?
        </button>
      </div>
    );
  }
}
