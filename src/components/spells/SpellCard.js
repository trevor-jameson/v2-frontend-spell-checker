import React from 'react'
import styled from 'styled-components'

const StyledSpellCard = styled.div`
    padding: 2em;
`
const SpellCard = (props) => {
    const { name, desc, klasses } = props.spell
    return (
      <StyledSpellCard>
        Name: {name}
        <br />
        Classes: {klasses.split(' ').join(' & ')}
        <br />
        Description: {desc}
        <br />
      </StyledSpellCard>
    );
}

export default SpellCard