//Action Types
export const SET_USER = "SET_USER";

export interface Company {
  company_id: number,
  company_name: string
}

export interface User {
  user_id: number,
  user: string,
  email: string,
  company: Company,
  image: string,
  permission_level: number,
  access_token: string,
}

//Action Creator
export const setUser = (user: User) => ({
  type: SET_USER,
  user
});
