import Button from "../../UI/button/Button";
import { Input, InputType } from "../../UI/input/Input";

import { ReactComponent as BarberAvatar } from "../../assets/Barber.svg";

import styles from "./LoginUser.module.css";
import { useState } from "react";
import { AuthApi } from "../../libs/ApiServices/AuthApi";
import { useMutation, useQuery } from "react-query";

const LoginUser = ({
  userName,
  focusRef,
  rols
}: {
  userName: string;
  rols: string
  focusRef: React.Ref<HTMLInputElement>;
}) => {
  const [passWord, setPassWord] = useState("");
  const notSelected = userName.length === 0;

  // do i shikoj me vone 
  const { mutate: mutateLogin, data: loginData } = useMutation(
    "userLogIn",
    AuthApi().PostUsersLogIn
  );

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
      {rols && <div className={styles.ribbon}>
		    {rols}
	    </div>}
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
                  placeHolder='Password'
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
