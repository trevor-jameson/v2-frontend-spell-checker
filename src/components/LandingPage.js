import React from 'react'

import Login from './Login'
import Signup from './Signup'
import Welcome from './Welcome'

export default class LandingPage extends React.Component {
    
    state = { currentView: '' }

    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value })    

    pageToRender = () => {
        switch (this.state.currentView) {
            case 'login':
                return <Login handleChange={this.handleChange} />
            case 'signup':
                return <Signup handleChange={this.handleChange} />
            default:
                return <Welcome handleChange={this.handleChange} />
        }
    }

    render(){
        return (
            <div id='landing-page'>
                {this.pageToRender()} 
            </div>

        )
    }
}