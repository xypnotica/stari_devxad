import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import projectsNavBarReducers from "./projectsReducers/projectsNavBarReducers";

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  page: projectsNavBarReducers
});
