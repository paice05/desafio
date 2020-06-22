import { combineReducers } from "redux";

import usersReducer from "./users";
import authReducer from "./auth";

const rootReducers = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

export default rootReducers;
