import axios, {AxiosResponse} from "axios";
const URL = "http://vmi173836.contaboserver.net:5000";

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
