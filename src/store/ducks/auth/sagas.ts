import { call, put } from "redux-saga/effects";

import { index } from "../../../service/methods";

import { TypesAuth } from "./types";

// remover
import data from "../../../service/data";

function* getUserAuthenticate() {
  try {
    // const response = yield call(index, "/profile/:id");

    yield put({
      type: TypesAuth.LOAD_SUCCESS,
      payload: data.users[0],
    });
  } catch (error) {
    yield put({ type: TypesAuth.LOAD_FAILURE });
  }
}

export default {
  getUserAuthenticate,
};
