import { createStore, Store, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./ducks/rootReducer";

import { StateUser } from "./ducks/users/types";

export interface ApplicationState {
  users: StateUser;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(logger)
);

export default store;
