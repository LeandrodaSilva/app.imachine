import axios, { AxiosResponse } from "axios";
import { Warning } from "../types";

const URL = process.env.NEXT_PUBLIC_SERVICE_IMACHINE_URL || "";

const Imachine = {
  login: (email: string, password: string): Promise<AxiosResponse<any>> => {
    return axios.post(
      `${URL}/resources/users/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  logout: (): Promise<AxiosResponse<any>> => {
    return axios.put(
      `${URL}/resources/users/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("session"),
        },
      }
    );
  },
  machine: {
    warnings: async (): Promise<Array<Warning> | []> => {
      let resp = await axios.get(`${URL}/resources/machine/warnings`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("session"),
        },
      });

      if (resp.status === 200) {
        return resp?.data?.results[0]?.data[0]?.machines;
      }

      return [];
    },
    update: () => {},
    register: () => {},
  },
};

export default Imachine;
