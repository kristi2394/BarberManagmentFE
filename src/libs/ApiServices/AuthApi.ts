import Axios from "axios";
import { ApiConfig } from "./ApiConfig";

export const AuthApi = () => {
  const GetUsersList = () => {
    return Axios.get(`${ApiConfig.BASE_URL}/usersList`);
  };

  return {
    GetUsersList,
  };
};
