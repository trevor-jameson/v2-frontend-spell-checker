// NPM imports
import React from 'react'
import { connect } from 'react-redux'

// src repo imports
import Adapter from '../../utils/Adapter'
import SpellCard from './SpellCard'
import SpellSearch from './SpellSearch'
import { filterSpellsByQuery } from '../../utils/Queries'

// Redux-specific src repo imports
import { fetchedSpells } from '../../redux/actionCreators'


class SpellsPage extends React.Component {

    componentDidMount() {
        Adapter.get('spells')
            .then(res => res.json())
            .then(spells => {
                this.props.fetchedSpells(spells)
            })
            .catch(console.log)
    }

    render() {
        const { spells, spellQuery } = this.props
        debugger
        return (
            <div>
                <SpellSearch/>
                {filterSpellsByQuery(spells, spellQuery).map((spell, index) => {
                    return <SpellCard spell={spell} key={index} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        spells: state.spells,
        spellQuery: state.spellQuery
    }
}

const mapDispatchToProps = dispatch => ({
    fetchedSpells: (spells) => { dispatch(fetchedSpells(spells)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(SpellsPage)