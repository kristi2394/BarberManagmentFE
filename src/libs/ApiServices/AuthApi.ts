import axios from "axios";
import { ApiConfig } from "./ApiConfig";

export const AuthApi = () => {
  const GetUsersList = async () => {
    const api = await axios.get(`${ApiConfig.BASE_URL}/usersList`);
    return api.data
  };

  return {
    GetUsersList
  }
};
