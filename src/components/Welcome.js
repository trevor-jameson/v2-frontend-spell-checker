
import React, {Fragment} from 'react'

const Welcome = (props) => {
    return (
      <Fragment>
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
      </Fragment>
    );
}

export default Welcome