import React from 'react'

export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    render() {
        return (
          <form>
            <label for="username">Username</label>
            <input type="text" name="username" value={this.state.username} />
            <label for="password">Password</label>
            <input type="text" name="password" value={this.state.password} />
            <button onClick={this.handleChange}>Submit</button>
          </form>
        );
    }
}
