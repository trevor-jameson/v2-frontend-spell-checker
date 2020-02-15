import React from 'react'
import { connect } from 'react-redux'
import { searchSpells } from '../../redux/actionCreators'

class SpellSearch extends React.Component {
    state = {
       name: '',
       castingtime: '',
    }

    

    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value})

    renderCastingTimeOptions = () => {
        const allTimeOptions = ["", "1 action", "1 bonus action", "1 reaction", "1 minute", "10 minutes", "1 hour", "8 hours", "12 hours", "24 hours",]
        return allTimeOptions.map((opt, index) => (<option value={opt} key={index}>{opt}</option>))
    }

    renderNameSuggestions = () => {
        const matchedSpells = []
        
        // Return no matches if search query is empty
        if (this.state.name.length === 0) return matchedSpells
        const nameQuery = new RegExp(this.state.name, "i")

        // Create datalist options for case-insensitive name matches and add to rendered result array
        this.props.spells.forEach((spell, index) => {
            if (spell.name.match(nameQuery)) {
                const listOption = <option value={spell.name} key={index}/>
                matchedSpells.push(listOption)
            }
        })
        return matchedSpells
    }

    render() {
        const { name } = this.state
        return(
            <form onSubmit={(e) => {e.preventDefault(); this.props.searchSpells({...this.state})}}>
                <label htmlFor="name">Spell Name: </label>
                <input 
                    name='name' 
                    type='text' 
                    value={name} 
                    onChange={this.handleChange} 
                    list="nameSuggestions"
                />
                <datalist id="nameSuggestions">
                    {this.renderNameSuggestions()}
                </datalist>
                <label htmlFor="castingtime">Casting Time: </label>
                <select 
                    name="castingtime" 
                    onChange={this.handleChange}
                >
                    {this.renderCastingTimeOptions()}
                </select>
                <button type="submit">Search Spells</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchSpells: (spellQuery) => dispatch(searchSpells(spellQuery))
})

const mapStateToProps = (state) => ({
    spells: state.spells
})

export default connect(mapStateToProps, mapDispatchToProps)(SpellSearch)
