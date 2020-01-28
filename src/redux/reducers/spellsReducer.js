import { FETCHED_SPELLS } from "../actionTypes";

export const spellsReducer = (prevState = [], action) => {
  switch (action.type) {
    case FETCHED_SPELLS:
        return action.spells
    default:
      return prevState;
  }
};

