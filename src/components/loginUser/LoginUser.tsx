import Button from "../../UI/button/Button";
import { Input, InputType } from "../../UI/input/Input";

import { ReactComponent as BarberAvatar } from "../../assets/Barber.svg";

import styles from "./LoginUser.module.css";
import { useState } from "react";
import { AuthApi } from "../../libs/ApiServices/AuthApi";
import { useMutation, useQuery } from "react-query";
import { roles } from "../../types/rols";
import useGlobalContext from "../../context/useGlobalContext";
import LogInServices, { logInStore } from "../../libs/LogInServices/LogInServices";

const LoginUser = ({
  userName,
  focusRef,
  rols,
}: {
  userName: string;
  rols: string;
  focusRef: React.Ref<HTMLInputElement>;
}) => {
  const [passWord, setPassWord] = useState("");
  const notSelected = userName.length === 0;
  const { LogIn, getLoginData } = LogInServices();
  // do i shikoj me vone
  const { mutate: mutateLogin, data: loginData } = useMutation(
    "userLogIn",
    AuthApi().PostUsersLogIn,
    {
      onSuccess: (response) => {
        console.log("fasdafdsf sdfasdfasdfsfdsfdsfsdfsfdasfdsf");
        console.log(response);
        
        LogIn(response.token, response.id, response.rols);
      },
    }
  );
  console.log(getLoginData);
  console.log(logInStore().getLoginData());
  const postHandler = (e: any) => {
    e.preventDefault();
    const postBody = {
      username: userName,
      password: passWord,
    };
    mutateLogin(postBody);
  };

  const onchangeHandler = (e: any) => {
    setTimeout(() => {
      setPassWord(e.target.value);
    }, 300);
  };

  //

  return (
    <div className={styles.formAndRoles}>
      {rols && <div className={styles.ribbon}>{rols}</div>}
      <div className={styles.formHolder}>
        <form>
          <div className={styles.avatartHolder}>
            <BarberAvatar />
          </div>
          <div className={styles.informationHolder}>
            <Input type={InputType.text} value={userName} readOnly={true} />
            {notSelected ? (
              <h1 className={styles.noUserStyle}>No User Selected</h1>
            ) : (
              <div className={styles.passButtHolder}>
                <Input
                  type={InputType.password}
                  onChange={onchangeHandler}
                  reF={focusRef}
                  placeHolder="Password"
                />
                <Button onClick={postHandler} customClass={styles.loginButt}>
                  LogIn
                </Button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
