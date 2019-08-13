import * as types from "../actions/actionTypes";

export default function characterReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_CHARACTER:
      return [...state, { ...action.character }];
    default:
      return state;
  }
}
