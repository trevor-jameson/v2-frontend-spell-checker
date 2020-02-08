import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

// Set store var to IIFE returned redux object
const store = (function configureStore(){
  return createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
})()

export const boundDispatch = (action) => store.dispatch(action)

export default store