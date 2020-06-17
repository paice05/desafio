export enum TypesUsers {
  LOAD = '@users/LOAD',
  LOAD_SUCCESS = '@users/LOAD_SUCCESS',
  LOAD_FAILURE = '@users/LOAD_FAILURE',

  CREATE = '@users/CREATE',
  CREATE_SUCCESS = '@users/CREATE_SUCCESS',
  CREATE_FAILURE = '@users/CREATE_FAILURE',
}

export interface User {
  id: string;
  name: string;
}

export interface IById {
  [key: string]: object
}

export interface StateUser {
  byId: IById;
  allId: string[];
}
