import React from 'react';
import { Route, Switch } from 'react-router-dom'

import LandingPage from './components/users/LandingPage'
import SpellsPage from './components/spells/SpellsPage'

export default class App extends React.Component {
    render(){
        return (
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/spells" component={SpellsPage} />
            </Switch>
        );
    }
}