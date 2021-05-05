import { AnyAction } from "redux";
import { SET_USER } from "../actions/userActions";
import { defineState } from "redux-localstore";
import { User } from "../../types";

export interface UserState {
  user: User;
}

const defaultState = {
  user: {
    user_id: 0,
    user: "",
    email: "",
    company: {
      company_id: 0,
      company_name: "",
    },
    image: "",
    permission_level: 0,
    access_token: "",
  },
};

const initialState = defineState(defaultState)("user");

const userReducer = (state: UserState = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return { ...state };
  }
};

export default userReducer;
