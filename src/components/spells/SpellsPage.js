// NPM imports
import React from 'react'
import { connect } from 'react-redux'

// src repo imports
import Adapter from '../../utils/Adapter'
import SpellCard from './SpellCard'
import SpellSearch from './SpellSearch'

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

    filterSpellsByQuery = () => {
        // Note: Refactor after lecture to use Object.keys iterative filter
        const { spells, spellQuery } = this.props

        // Return spells filtered by whether their name includes the spellQuery (case insensitive)
        return spells.filter(spell => spell.name.toLowerCase().includes(spellQuery.spellName.toLowerCase()))
    }

    render() {
        return (
            <div>
                <SpellSearch/>
                {this.filterSpellsByQuery().map((spell, index) => <SpellCard spell={spell} key={index} />)}
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