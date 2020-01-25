import React from 'react'
import Adapter from '../utils/Adapter'
import SpellCard from './SpellCard'

export default class SpellsPage extends React.Component {
    state = {
        spells: [],
        isLoading: true,
        filter: {
            name: '',
        },
    }

    componentDidMount() {
        Adapter.get('spells')
            .then(res => res.json())
            .then(spells => this.setState({
                isLoading: false,
                spells
            }))
            .catch(console.log)
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? null : 
                    this.state.spells.map((spell, index) => <SpellCard spell={spell} key={index}/>)
                }
            </div>
        )
    }
}

