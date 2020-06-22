import { all, takeLatest } from "redux-saga/effects";

import { TypesUsers } from "./users/types";
import { TypesAuth } from "./auth/types";

import usersSagas from "./users/sagas";
import authSagas from "./auth/sagas";

export default function* () {
  return yield all([
    // users
    takeLatest(TypesUsers.LOAD, usersSagas.findManyUsers),
    // auth
    takeLatest(TypesAuth.LOAD, authSagas.getUserAuthenticate),
  ]);
}
