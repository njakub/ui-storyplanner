import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:8080/api/v1/story-projects";

export function getProjects() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
