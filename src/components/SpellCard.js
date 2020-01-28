import React from 'react'
import styled from 'styled-components'

const StyledSpellCard = styled.div`
    padding: 2em;
`
const SpellCard = (props) => {
    const { name, desc, klass } = props.spell
    return (
      <StyledSpellCard>
        Name: {name}
        <br />
        Description: {desc}
        <br />
        Klasses: {klass}
        <br />
      </StyledSpellCard>
    );
}

export default SpellCard