import { call, put } from "redux-saga/effects";

import { index, show } from "../../../service/methods";

import { TypesUsers } from "./types";

// remover
import data from "../../../service/data";

function* findManyUsers() {
  try {
    // const response = yield call(index, "/users");

    yield put({
      type: TypesUsers.LOAD_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    yield put({ type: TypesUsers.LOAD_FAILURE });
  }
}

export default {
  findManyUsers,
};
