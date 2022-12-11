import Axios from "axios";
import { ApiConfig } from "./ApiConfig";

export const AuthApi = () => {
  const GetUsersList = () => {
    return Axios.get(`${ApiConfig.BASE_URL}/usersList`).then(
      (response) => response.data
    );
  };
  const PostUsersLogIn = (body: any) => {
    return Axios.post(`${ApiConfig.BASE_URL}/LogIn`, body).then(
      (response) => response.data
    );
  };

  return {
    GetUsersList,
    PostUsersLogIn,
  };
};
