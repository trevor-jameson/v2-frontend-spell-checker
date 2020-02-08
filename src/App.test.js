import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// This is a "Smoke Test" to check whether the ReactDOM is able to render
it('renders without crashing', () => {
  ReactDOM.render(
    <App/>, 
    document.getElementById('root')
    );
});