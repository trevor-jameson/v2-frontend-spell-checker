import { SEARCH_SPELLS } from "../actionTypes";

export const spellQueryReducer = (prevState = {
    spellName: ''
}, action) => {
  switch (action.type) {
    case SEARCH_SPELLS:
        return action.spellQuery
    default:
      return prevState;
  }
};

