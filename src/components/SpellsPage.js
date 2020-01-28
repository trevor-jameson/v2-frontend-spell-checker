// NPM imports
import React from 'react'
import { connect } from 'react-redux'

// src repo imports
import Adapter from '../utils/Adapter'
import SpellCard from '../components/SpellCard'

// Redux-specific src repo imports
import { fetchedSpells } from '../redux/actionCreators'


class SpellsPage extends React.Component {

    // Local state for controlled filter options
    state = {
        name: '',
    }

    componentDidMount() {
        Adapter.get('spells')
            .then(res => res.json())
            .then(spells => {
                this.props.fetchedSpells(spells)
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                {this.props.spells.map((spell, index) => <SpellCard spell={spell} key={index} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        spells: state.spells
    }
}

const mapDispatchToProps = dispatch => ({
    fetchedSpells: (spells) => { dispatch(fetchedSpells(spells)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(SpellsPage)