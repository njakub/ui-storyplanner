import { combineReducers } from "redux";
import characters from "./characterReducer";

const rootReducer = combineReducers({
  characters
});

export default rootReducer;
