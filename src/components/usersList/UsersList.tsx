import Button from "../../UI/button/Button";

import styles from "./UsersList.module.css";

const UsersList = ({
  user,
  buttonVal,
  focusHandler,
  rols,
}: {
  user: string;
  buttonVal: any;
  focusHandler: () => void;
  rols: string;
}) => {
  const onClickHandler = (user: string) => {
    buttonVal(user);
    focusHandler();
  };

  return (
    <Button
      value={user}
      onClick={() => onClickHandler(user)}
      customClass={styles.avatarButt}
    >
      <div
        className={`${
          rols === "admin" ? styles.adminStyle : styles.barberStyle
        } ${styles.rolesHolderStyle}`}
      >
        <h5>{rols}</h5>
      </div>
      {user}
    </Button>
  );
};

export default UsersList;
