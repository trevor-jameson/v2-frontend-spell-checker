
import React, {Fragment} from 'react'

const Welcome = (props) => {
    return (
      <Fragment>
        <button 
            name="currentView" 
            value="login" 
            onClick={props.changeView} >
            Login
        </button>
        <button 
            name="currentView" 
            value="signup" 
            onClick={props.changeView} >
            Sign Up
        </button>
      </Fragment>
    );
}

export default Welcome