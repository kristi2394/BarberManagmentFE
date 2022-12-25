import React from "react";
import LogInServices from "../../libs/LogInServices/LogInServices";
import styles from "./SidebarComponent.module.css";

const SideBarItem = ({
  icon,
  name,
  onclick,
}: {
  name: string;
  icon: string;
  onclick: () => void;
}) => {
  return (
    <div className={styles.sidbarButton} onClick={onclick}>
      <img className={styles.sidebarIcon} src={icon} alt="" />
      <span className={styles.sidebarName}>{name}</span>
    </div>
  );
};

const SidebarComponent = () => {
  const logInServices = LogInServices();

  const logOut = () => {

    logInServices.LogOut();
  };
  return (
    <div className={styles.sidebarContainer}>
      <div>
        <div className={styles.profileContainer}>
          <img className={styles.profileIcon} src="" alt="" />
          <div className={styles.profileUserContent}>
            <span className={styles.profileUsername}>name</span>
            <span className={styles.profileUsername}>role</span>
          </div>
        </div>
      </div>
      <div>
        <SideBarItem icon="" name="menuRout1" onclick={() => {}} />
        <SideBarItem icon="" name="menuRout2" onclick={() => {}} />
        <SideBarItem icon="" name="menuRout3" onclick={() => {}} />
        <SideBarItem icon="" name="menuRout4" onclick={() => {}} />
        <SideBarItem icon="" name="menuRout5" onclick={() => {}} />
      </div>
      <button className={styles.logOutButton} onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default SidebarComponent;
