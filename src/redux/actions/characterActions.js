import * as types from "./actionTypes";
export function createCharacter(character) {
  return { type: types.CREATE_CHARACTER, character };
}
