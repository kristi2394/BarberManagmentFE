import { useRef, useState } from "react";
import { useQuery } from "react-query";

import LoginUser from "../../components/loginUser/LoginUser";
import UsersList from "../../components/usersList/UsersList";
import { AuthApi } from "../../libs/ApiServices/AuthApi";

import styles from "./LogIn.module.css";

const dummyUsers = [
  { id: 1, name: "Kristi" },
  { id: 2, name: "Zeqo" },
  { id: 3, name: "Idi" },
];

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const focusRef = useRef<HTMLInputElement>(null);
  const { data } = useQuery("UsersList", ()=>AuthApi().GetUsersList());

  console.log(data);

  const focusHandler = () => {
    if (focusRef.current !== null) {
      focusRef.current.focus();
    }
  };
  const buttonVal = (valueButton: string) => {
    setUserName(valueButton);
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.userHolder}>
        <ul>
          {dummyUsers.map((user) => (
            <UsersList
              buttonVal={buttonVal}
              key={user.id}
              user={user.name}
              focusHandler={focusHandler}
            />
          ))}
        </ul>
      </div>
      <div className={styles.loginHolder}>
        <LoginUser userName={userName} focusRef={focusRef} />
      </div>
    </div>
  );
};

export default Login;
