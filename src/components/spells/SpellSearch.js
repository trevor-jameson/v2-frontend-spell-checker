import React from 'react'
import { connect } from 'react-redux'
import { searchSpells } from '../../redux/actionCreators'

class SpellSearch extends React.Component {
    state = {
       spellName: '' 
    }

    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value})

    render() {
        const { spellName } = this.state
        return(
            <div>
                <input name='spellName' type='text' value={spellName} onChange={this.handleChange} />
                <button onClick={() => this.props.searchSpells({...this.state})}>Search Spells</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchSpells: (spellQuery) => dispatch(searchSpells(spellQuery))
})

export default connect(null, mapDispatchToProps)(SpellSearch)
