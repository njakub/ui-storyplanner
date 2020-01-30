import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:8080/api/v1/projects";

export function getProjects() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveProject(project) {
  return fetch(baseUrl + (project.id || ""), {
    method: project.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(project)
  })
    .then(handleResponse)
    .catch(handleError);
}
