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
            <form onSubmit={(e) => {e.preventDefault(); this.props.searchSpells({...this.state})}}>
                <input name='spellName' type='text' value={spellName} onChange={this.handleChange} />
                <button type="submit">Search Spells</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchSpells: (spellQuery) => dispatch(searchSpells(spellQuery))
})

export default connect(null, mapDispatchToProps)(SpellSearch)
