import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { spellsReducer } from './spellsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  spells: spellsReducer,
})

export default rootReducer