export enum TypesUsers {
  LOAD = "@users/LOAD",
  LOAD_SUCCESS = "@users/LOAD_SUCCESS",
  LOAD_FAILURE = "@users/LOAD_FAILURE",

  LOAD_ONE = "@users/LOAD_ONE",
  LOAD_ONE_SUCCESS = "@users/LOAD_ONE_SUCCESS",
  LOAD_ONE_FAILURE = "@users/LOAD_ONE_FAILURE",

  CREATE = "@users/CREATE",
  CREATE_SUCCESS = "@users/CREATE_SUCCESS",
  CREATE_FAILURE = "@users/CREATE_FAILURE",
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  amount: string;
  photo_url: string;
  status: string;
}

export interface IById {
  [key: string]: object;
}

export interface StateUser {
  byId: IById;
  allId: string[];
}
