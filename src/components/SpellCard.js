import React from 'react'

const SpellCard = (props) => {
    const { name, duration, castingTime } = props.spell
    return (
        <div>
            Name: {name}
            Duration: {duration}
            Casting Time: {castingTime}
        </div>
    )
}

export default SpellCard