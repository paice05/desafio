import { Reducer } from 'redux';

import { StateUser, IById, TypesUsers } from './types';

import { createTreeById, createTreeAllId } from '../resource/selectors';

const initialState: StateUser = {
    byId: {},
    allId: [],
};

const reducerUserById: Reducer<IById> = (state = {}, action) => {
    switch (action.type) {
        case TypesUsers.LOAD_SUCCESS:
            return createTreeById(action.payload);
        default:
            return state;
    }
};

const reducerUserAllId: Reducer<string[]> = (state = [], action) => {
    switch (action.type) {
        case TypesUsers.LOAD_SUCCESS:
            return createTreeAllId(action.payload);
        default:
            return state;
    }
};

const reducerUser: Reducer<StateUser> = (state = initialState, action) => ({
    byId: reducerUserById(state.byId, action),
    allId: reducerUserAllId(state.allId, action),
});

export default reducerUser;
