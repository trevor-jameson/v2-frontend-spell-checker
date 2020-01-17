
import React from 'react'

const Welcome = (props) => {
    return (
      <div id='welcome-page'>
        <button 
            name="currentView" 
            value="login" 
            onClick={props.handleChange} >
            Login
        </button>
        <button 
            name="currentView" 
            value="signup" 
            onClick={props.handleChange} >
            Sign Up
        </button>
      </div>
    );
}

export default Welcome