import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import App from './App';
import store from './redux/store'

// This is a "Smoke Test" to check whether the ReactDOM is able to render
it('renders without crashing', () => {
  const root = document.getElementById('root')
  ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
    ReactDOM.unmountComponentAtNode(root);
});