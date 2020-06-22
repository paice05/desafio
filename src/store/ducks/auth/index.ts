import { Reducer } from "redux";

import { StateAuth, TypesAuth, User } from "./types";

const initialState: StateAuth = {
  user: {} as User,
};

const reducerAuthUser: Reducer<User> = (state = {} as User, aciton) => {
  switch (aciton.type) {
    case TypesAuth.LOAD_SUCCESS:
      return aciton.payload;
    default:
      return state;
  }
};

const reducerUser: Reducer<StateAuth> = (state = initialState, action) => ({
  user: reducerAuthUser(state.user, action),
});

export default reducerUser;
