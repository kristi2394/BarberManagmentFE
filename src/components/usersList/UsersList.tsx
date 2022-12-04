import Button from "../../UI/button/Button";

import styles from "./UsersList.module.css";

const UsersList = ({ user, buttonVal, focusHandler }: any) => {
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    buttonVal((e.target as HTMLInputElement).value);
    focusHandler();
  };

  return (
    <li>
      <Button
        value={user}
        onClick={onClickHandler}
        customClass={styles.avatarButt}
      >
        {user}
      </Button>
    </li>
  );
};

export default UsersList;
