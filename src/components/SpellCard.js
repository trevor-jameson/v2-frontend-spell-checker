import React from 'react'
const SpellCard = (props) => {
    const { name, id, desc, lvl, klass } = props.spell
    return (
        <div
            className='spell-card'

        >
            Name: {name}
            Description: {desc}
            Klasses: {klass}
        </div>
    )
}

export default SpellCard