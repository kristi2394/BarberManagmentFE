import { useRef, useState } from "react";
import { useQuery } from "react-query";

import LoginUser from "../../components/loginUser/LoginUser";
import UsersList from "../../components/usersList/UsersList";
import { AuthApi } from "../../libs/ApiServices/AuthApi";

import { ReactComponent as BarberShopLogo } from "../../assets/Barber.svg";

import styles from "./LogIn.module.css";

const Login = () => {
  const [userName, setUserName] = useState<{
    valueButton: string;
    rols: string;
  }>({
    valueButton: "",
    rols: "",
  });
  const focusRef = useRef<HTMLInputElement>(null);
  const { data: listUsers } = useQuery("UsersList", () =>
    AuthApi().GetUsersList()
  );

  if (!listUsers) {
    return;
  }

  const focusHandler = () => {
    if (focusRef.current !== null) {
      focusRef.current.focus();
    }
  };
  const buttonVal = (valueButton: string, rols: string) => {
    setUserName({
      ...userName,
      valueButton: valueButton,
      rols: rols,
    });
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.userHolder}>
        <div className={styles.logoAndUsers}>
          <div className={styles.logoName}>
            <BarberShopLogo />
            <h1>
              <span>Title</span> Of <span>Bussiness</span>
            </h1>
          </div>
          <ul>
            {listUsers.map((user: any) => (
              <UsersList
                buttonVal={buttonVal}
                key={user.id}
                user={user.username}
                focusHandler={focusHandler}
                rols={user.rols}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.loginHolder}>
        <LoginUser
          userName={userName.valueButton}
          rols={userName.rols}
          focusRef={focusRef}
        />
      </div>
    </div>
  );
};

export default Login;
