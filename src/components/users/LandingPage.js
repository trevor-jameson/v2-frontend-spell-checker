import React from 'react'
import styled from 'styled-components'

import Login from './Login'
import Signup from './Signup'
import Welcome from './Welcome'

const StyledLandingContainer = styled.div`
    border: 2px solid black;
    margin: 20% auto;
    padding: 1em;
    text-align: center;
    max-width: 20%;
`

export default class LandingPage extends React.Component {
    state = {
        currentView: '',
    }

    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value })

    pageToRender = () => {
        switch (this.state.currentView) {
            case 'login':
                return <Login changeView={this.handleChange} />
            case 'signup':
                return <Signup changeView={this.handleChange} />
            default:
                return <Welcome changeView={this.handleChange} />
        }
    }

    render(){
        return (
            <StyledLandingContainer>
                {this.pageToRender()} 
            </StyledLandingContainer>
        )
    }
}