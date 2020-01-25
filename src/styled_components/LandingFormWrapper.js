import styled from 'styled-components' 

// Wrapper should overwrite styles in the passed-in component
const LandingFormWrapper = (component) =>{
    return styled(component)`
        background-color: red;
        color: blue;
    `
}


export default LandingFormWrapper