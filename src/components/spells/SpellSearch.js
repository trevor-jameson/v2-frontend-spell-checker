import React from 'react'
import { connect } from 'react-redux'
import { searchSpells } from '../../redux/actionCreators'

class SpellSearch extends React.Component {
    state = {
       name: '',
       castingtime: '',
       klasses: '',
       range: '',
       duration: '',
       concentration: null,
       lvl: null,
    }

    

    handleChange = (e) => this.setState({ [e.currentTarget.name]: e.currentTarget.value})

    // Returns a list of HTML <options> given case matched against param string
    renderSearchDropdownOptions = (type) => {
        let optionsList
        switch (type) {
            case 'castingtime':
                optionsList = ["", "1 action", "1 bonus action", "1 reaction", "1 minute", "10 minutes", "1 hour", "8 hours", "12 hours", "24 hours",]
                break;
            case 'klasses':
                optionsList = ["", "Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard",]
                break;
            case 'range':
                optionsList = ["", "Self", "Touch", "Sight", "5 feet",  "10 feet", "30 feet", "60 feet", "90 feet", "100 feet", "120 feet", "150 feet", "300 feet", "500 feet", "1 mile", "500 miles", "Special", "Unlimited",]
                break;
            case 'duration':
                optionsList = ["", "Instantaneous", "1 round", "1 minute", "10 minutes", "1 hour", "8 hours", "24 hours", "7 days", "10 days", "30 days", "Until dispelled", "Up to 1 round", "Up to 1 minute","Up to 10 minutes", "Up to 1 hour", "Up to 2 hours", "Up to 8 hours", "Up to 24 hours", "Special",]
                break;
            case 'lvl':
                optionsList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                break;
            default:
                throw new Error('Failed to render SpellSearch dropdown using one of the following options: castingtime, klasses')
        }
        return optionsList.map((opt, index) => (<option value={opt} key={index}>{opt}</option>))
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
                    {this.renderSearchDropdownOptions('castingtime')}
                </select>
                <label htmlFor="klasses">Class: </label>
                <select 
                    name="klasses"
                    onChange={this.handleChange}
                >
                    {this.renderSearchDropdownOptions('klasses')}
                </select>
                <label htmlFor="range">Range: </label>
                <select 
                    name="range"
                    onChange={this.handleChange}
                >
                    {this.renderSearchDropdownOptions('range')}
                </select>
                <label htmlFor="duration">Duration: </label>
                <select 
                    name="duration"
                    onChange={this.handleChange}
                >
                    {this.renderSearchDropdownOptions('duration')}
                </select>
                <label htmlFor="concentration">Concentration: </label>
                <select 
                    name="concentration"
                    onChange={this.handleChange}
                >
                    <option value={null}></option>
                    <option value={false}>False</option>
                    <option value={true}>True</option>
                </select>
                <label htmlFor="lvl">Level: </label>
                <select 
                    name="lvl"
                    onChange={this.handleChange}
                >
                    <option value={null}></option>
                    <option value={0}>Cantrip</option>
                    {/* Remove first option "0" to replace with "Cantrip" text option */}
                    {this.renderSearchDropdownOptions('lvl').slice(1)}
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
