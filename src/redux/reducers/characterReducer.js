import * as types from "../actions/actionTypes";

export default function characterReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_CHARACTER:
      return [...state, { ...action.character }];
    case types.LOAD_CHARACTERS_SUCCESS:
      return action.characters;
    default:
      return state;
  }
}
