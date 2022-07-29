import countReducer from "./countReducer";
import todoReducer from "./todoReducer";
import { combineReducers } from "redux";
const reducers = combineReducers({
  countReducer,
  todoReducer,
});
export default reducers;
