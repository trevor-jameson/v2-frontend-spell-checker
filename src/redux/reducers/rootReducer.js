import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { spellsReducer } from './spellsReducer'
import { spellQueryReducer } from './spellQueryReducer'

const rootReducer = combineReducers({
  user: userReducer,
  spells: spellsReducer,
  spellQuery: spellQueryReducer
})

export default rootReducer