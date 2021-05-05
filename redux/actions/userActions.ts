//Action Types
import { User } from "../../types";

export const SET_USER = "SET_USER";

//Action Creator
export const setUser = (user: User) => ({
  type: SET_USER,
  user,
});
