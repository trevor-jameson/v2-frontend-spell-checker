import React from 'react';
import { Route, Switch } from 'react-router-dom'

import LandingPage from './components/LandingPage'

export default class App extends React.Component {
    render(){
        return (
            <Switch>
              <Route exact path="/" component={LandingPage} />
            </Switch>
        );
    }
}