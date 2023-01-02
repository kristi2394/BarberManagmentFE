import SideMenu from "../../layout/side-menu/SideMenu";
import LogInServices from "../../libs/LogInServices/LogInServices";
import Button from "../../UI/button/Button";
import ProfileHolder from "../../UI/profile-holder/ProfileHolder";
import styles from "./SidebarComponent.module.css";

const SidebarComponent = () => {
  const logInServices = LogInServices();

  const logOut = () => {
    logInServices.LogOut();
  };
  return (
    <SideMenu>
      <ProfileHolder profileName="Idi" />
      <Button>User1</Button>
      <button className={styles.logOutButton} onClick={logOut}>
        Log Out
      </button>
    </SideMenu>
  );
};

export default SidebarComponent;
