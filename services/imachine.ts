import axios, {AxiosResponse} from "axios";
const URL = process.env.NEXT_PUBLIC_SERVICE_IMACHINE_URL || "";

function login(email: string, password: string): Promise<AxiosResponse<any>> {
  return axios.post(`${URL}/resources/users/login`, {
    email: email,
    password: password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function logout(): Promise<AxiosResponse<any>> {
  return axios.put(`${URL}/resources/users/logout`, {},{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('session')
    }
  })
}

const Imachine = {
  login,
  logout
}

export default Imachine
