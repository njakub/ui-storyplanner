import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/projects/";

export function getProjects() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
