import { combineReducers } from "redux";
import characters from "./characterReducer";
import projects from "./projectReducer";

const rootReducer = combineReducers({
  characters,
  projects
});

export default rootReducer;
