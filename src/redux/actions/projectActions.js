import * as types from "./actionTypes";
import * as projectApi from "../../api/projectApi";

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export function loadProjects() {
  return function(dispatch) {
    return projectApi
      .getProjects()
      .then(projects => {
        dispatch(loadProjectsSuccess(projects));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveProject(project) {
  return function(dispatch) {
    return projectApi
      .saveProject(project)
      .then(resp => {})
      .catch(error => {
        throw error;
      });
  };
}
