import { handleResponse, handleError } from "./apiUtils";
const baseMockUrl = "http://localhost:3001/characters/";
const baseUrl = "http://localhost:8080/api/v1/characters";

const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export function getCharacters() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCharacter(character) {
  return fetch(
    `${baseUrl}/${
      character.actorCharacterId ? character.actorCharacterId : ""
    }`,
    {
      method: character.actorCharacterId ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(character)
    }
  )
    .then(handleResponse)
    .catch(handleError);
}

export function saveAppearance(appearance) {
  return fetch(`${baseUrl}/appearance/1`, {
    method: appearance.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(appearance)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCharacter(characterId) {
  return fetch(baseUrl + characterId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
