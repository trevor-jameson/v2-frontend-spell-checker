import React from 'react'
import { connect } from 'react-redux'
import { searchSpells } from '../../redux/actionCreators'

class SpellSearch extends React.Component {
    state = {
       spellName: '' 
    }

    

    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value})

    renderCastingTimeOptions = () => {
        const allTimeOptions = ["1 action", "1 bonus action", "1 reaction", "1 minute", "10 minutes", "1 hour", "8 hours", "12 hours", "24 hours",]
        return allTimeOptions.map((opt, index) => (<option value={opt} key={index}>{opt}</option>))
    }

    render() {
        const { spellName } = this.state
        return(
            <form onSubmit={(e) => {e.preventDefault(); this.props.searchSpells({...this.state})}}>
                <input name='spellName' type='text' value={spellName} onChange={this.handleChange} />
                <select>{this.renderCastingTimeOptions()}</select>
                <button type="submit">Search Spells</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchSpells: (spellQuery) => dispatch(searchSpells(spellQuery))
})

export default connect(null, mapDispatchToProps)(SpellSearch)
