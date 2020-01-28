import React from 'react'
import Adapter from '../utils/Adapter'

import { connect } from 'react-redux'

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
        return (<div></div>)
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