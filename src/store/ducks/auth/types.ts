export enum TypesAuth {
  LOAD = "@auth/LOAD",
  LOAD_SUCCESS = "@auth/LOAD_SUCCESS",
  LOAD_FAILURE = "@auth/LOAD_FAILURE",
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

export interface StateAuth {
  user: User;
}
