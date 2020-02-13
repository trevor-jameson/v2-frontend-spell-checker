import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";

import { persistor } from "./redux/store";
import App from './App';
import store from './redux/store'

// This is a "Smoke Test" to check whether the ReactDOM is able to render
it('renders without crashing', () => {
  const root = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    root
  );
    ReactDOM.unmountComponentAtNode(root);
});