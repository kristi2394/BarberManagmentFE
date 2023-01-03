import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { roles } from "../../types/rols";
import LogInServices, { logInStore } from "./LogInServices";

const AutoLoginComponent = () => {
  const logInService = LogInServices();
  const rout = useNavigate();
  const preventInit = useRef(true);

  window.history.pushState(null, window.location.href);
  window.onpopstate = function (event) {
    history.go(1);
  };

  useEffect(() => {
    logInService.AutoLogin();
    onPageInitOpen();
  }, []);

  useEffect(() => {
    console.log("prevent init action disabled ", preventInit);

    if (preventInit.current) {
      preventInit.current = false;
      return;
    }
    onLoginAction();
  }, [logInService.isLoggedIn]);

  const onPageInitOpen = () => {
    const logInData = logInStore().getLoginData();
    if (logInData) {
      if (logInData.roles == roles.barbers) rout("/HomePanel");
    }

    if (!logInData) {
      if (true) {
        rout("/");
      }
    }
  };
  console.log(logInService);

  const onLoginAction = () => {
    console.log(logInService.isLoggedIn);
    if (logInService.isLoggedIn) {
      if (logInService.getLoginData?.roles == roles.barbers) rout("/HomePanel");
    }
    if (!logInService.isLoggedIn) {
      rout("/");
    }
  };

  return <></>;
};

export default AutoLoginComponent;
