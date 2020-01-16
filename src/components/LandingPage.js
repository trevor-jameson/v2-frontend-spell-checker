import React from 'react'

import Login from './Login'
import Signup from './Signup'
import Welcome from './Welcome'

export default class LandingPage extends React.Component {
    state = {
        currentView: '',
    }

    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value })

    pageToRender = () => {
        switch (this.state.currentView) {
            case 'login':
                return <Login />
            case 'signup':
                return <Signup />
            default:
                return <Welcome handleChange={this.handleChange} />
        }
    }

    render(){
        return (
            <div>
                {this.pageToRender()} 
            </div>

        )
    }
}