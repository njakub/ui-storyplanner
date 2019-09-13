import * as types from "./actionTypes";
import * as charaterApi from "../../api/characterApi";

export function createCharacter(character) {
  return { type: types.CREATE_CHARACTER, character };
}

export function loadCharactersSuccess(characters) {
  return { type: types.LOAD_CHARACTERS_SUCCESS, characters };
}

export function loadCharacters() {
  return function(dispatch) {
    return charaterApi
      .getCharacters()
      .then(characters => {
        dispatch(loadCharactersSuccess(characters));
      })
      .catch(error => {
        throw error;
      });
  };
}
