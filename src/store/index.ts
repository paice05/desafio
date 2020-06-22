import { createStore, Store, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSagas";

import { StateUser } from "./ducks/users/types";
import { StateAuth } from "./ducks/auth/types";

export interface ApplicationState {
  auth: StateAuth;
  users: StateUser;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
