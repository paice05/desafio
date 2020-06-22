import { AxiosRequestConfig } from "axios";
import Axios from "./api";

export const index = (path: string, options: AxiosRequestConfig = {}) =>
  Axios.get(path, options).then((response) => response.data);

export const show = (
  path: string,
  id: string,
  options: AxiosRequestConfig = {}
) => Axios.get(`${path}/${id}`, options);
