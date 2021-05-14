import axios, { AxiosResponse } from "axios";
import { UserList, Warning } from "../types";

const URL = process.env.NEXT_PUBLIC_SERVICE_IMACHINE_URL || "";
const PREFIX = process.env.NEXT_PUBLIC_SERVICE_IMACHINE_PREFIX || "";


const imachine = axios.create({
  baseURL: URL + PREFIX,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": URL,
  },
});

const Imachine = {
  interceptor: (
    options = {
      onSuccess: undefined,
      onError: undefined,
    }
  ) => {
    axios.interceptors.response.use(
      (response) => {
        if (options.onSuccess) options.onSuccess(response);
        return response;
      },
      (error) => {
        if (options.onError) options.onError(error);

        if (error.response.status === 401) {
          localStorage.removeItem("session");
        }

        return Promise.reject(error);
      }
    );
    return Imachine;
  },

  Users: {
    list: async (): Promise<Array<UserList | []>> => {
      let resp = await imachine.get(`/resources/users/list`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("session"),
        },
      });

      if (resp.status === 200) {
        return resp?.data?.results[0]?.data[0]?.users;
      }

      return [];
    },

    login: (email: string, password: string): Promise<AxiosResponse<any>> => {
      return imachine.post(
        `/resources/users/login`,
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
      return imachine.put(
        `/resources/users/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("session"),
          },
        }
      );
    },
  },

  machine: {
    warnings: async (): Promise<Array<Warning> | []> => {
      axios.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response.status === 401) {
            localStorage.removeItem("session");
          }
          return Promise.reject(error);
        }
      );

      let resp = await imachine.get(`/resources/machine/warnings`, {
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
