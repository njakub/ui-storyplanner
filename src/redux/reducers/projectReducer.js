import * as types from "../actions/actionTypes";

export default function projectReducer(
  state = {
    projects: [],
    loadedProject: {},
    showProjectMenu: false
  },
  action
) {
  switch (action.type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return { ...state, projects: action.projects };
    case types.LOAD_PROJECT:
      return { ...state, loadedProject: action.project, showProjectMenu: true };
    default:
      return state;
  }
}
