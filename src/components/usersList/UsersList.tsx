import Button from "../../UI/button/Button";

import styles from "./UsersList.module.css";

const UsersList = ({ user, buttonVal, focusHandler, rols }: {user: string, buttonVal: any, focusHandler: () => void, rols: string }) => {
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    buttonVal((e.target as HTMLInputElement).value, rols);
    focusHandler();
  };

  return (
    <li>
      <Button
        value={user}
        onClick={onClickHandler}
        customClass={styles.avatarButt}
      >
        <div className={`${rols === 'admin' ? styles.adminStyle : styles.barberStyle} ${styles.rolesHolderStyle}`}><h5>{rols}</h5></div>
        {user}
      </Button>
    </li>
  );
};

export default UsersList;
