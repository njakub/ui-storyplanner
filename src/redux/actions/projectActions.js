import * as types from "./actionTypes";
import * as projectApi from "../../api/projectApi";

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export function loadProjectSuccess(project) {
  return { type: types.LOAD_PROJECT, project };
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

export function loadProject(projectId) {
  return function(dispatch, getState) {
    const { projects } = getState();
    let project = projects.projects.find(
      element => element.storyProjectId === projectId
    );
    return dispatch(loadProjectSuccess(project));
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
