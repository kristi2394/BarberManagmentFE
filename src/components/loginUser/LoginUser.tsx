import Button from "../../UI/button/Button";
import { Input, InputType } from "../../UI/input/Input";

import { ReactComponent as BarberAvatar } from "../../assets/Barber.svg";

import styles from "./LoginUser.module.css";

const LoginUser = ({
  userName,
  focusRef,
}: {
  userName: string;
  focusRef: React.Ref<HTMLInputElement>;
}) => {
  const notSelected = userName.length === 0;
  return (
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
              <Input type={InputType.password} reF={focusRef} />
              <Button customClass={styles.loginButt}>LogIn</Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
