import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

export const UserContext = React.createContext(null)

ReactDOM.render(
    <BrowserRouter>
        <UserContext.Provider value={'hi'} >
            <App />
        </UserContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

