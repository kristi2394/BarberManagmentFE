import React from "react";
import useGlobalContext from "../../context/useGlobalContext";
import { roles } from "../../types/rols";

interface logInData {
  token: string;
  userId: string;
  roles: roles;
}
export const logInStore = () => {
  const saveLoginData = (logInData: logInData) => {
    localStorage.setItem("logInData", JSON.stringify(logInData));
  };
  const getLoginData = () => {
    const loginData: string | undefined | null =
      localStorage.getItem("logInData");
    if (loginData) {
      const loginDataParse: logInData = JSON.parse(loginData);
      return loginDataParse;
    }
    return null;
  };
  const clearLoginData = () => {
    localStorage.clear();
  };
  return {
    saveLoginData,
    getLoginData,
    clearLoginData,
  };
};

const LogInServices = () => {
  const { useLogInContext } = useGlobalContext();
  const { logInState, LogInActions } = useLogInContext;

  const isLoggedIn = logInState.isLoggedIn;
  const AutoLogin = () => {
    const logInData = logInStore().getLoginData();
    if (logInData) {
      LogIn(logInData.token, logInData.userId, logInData.roles);
    }
  };

  const getLoginData = logInStore().getLoginData();

  const LogIn = (token: string, userId: string, roles: roles) => {
    if (!token || !userId || !roles) {
      return null;
    }
    LogInActions.addToken(token);
    LogInActions.addUserId(userId);
    LogInActions.addRoles(roles);

    logInStore().saveLoginData({ token: token, userId: userId, roles: roles });
  };
  const LogOut = () => {
    LogInActions.clear();
    logInStore().clearLoginData();
  };
  return { LogIn, LogOut, AutoLogin, getLoginData, isLoggedIn };
};

export default LogInServices;
