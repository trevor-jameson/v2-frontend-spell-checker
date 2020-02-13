import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const reduxOptions = {
  trace: true, /* Enables stack trace devtools feature*/
  traceLimit: 25 /* Limits the trace size to prevent render degredation */
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Set store var to IIFE returned redux object
const store = (function configureStore(){
  return createStore(
    persistedReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(reduxOptions),
  );
})()

export const persistor = persistStore(store)

export const boundDispatch = (action) => store.dispatch(action)

export default store