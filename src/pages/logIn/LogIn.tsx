import { useRef, useState } from "react";
import { useQuery } from "react-query";

import LoginUser from "../../components/loginUser/LoginUser";
import UsersList from "../../components/usersList/UsersList";
import { AuthApi } from "../../libs/ApiServices/AuthApi";

import styles from "./LogIn.module.css";
import SideMenu from "../../layout/side-menu/SideMenu";
import ProfileHolder from "../../UI/profile-holder/ProfileHolder";

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
      <SideMenu>
        <ProfileHolder />
        {listUsers.map((user: any) => (
          <UsersList
            buttonVal={buttonVal}
            key={user.id}
            user={user.username}
            focusHandler={focusHandler}
            rols={user.rols}
          />
        ))}
      </SideMenu>
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
