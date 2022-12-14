import React from "react";
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
  return (
    <div className={styles.sidebarContainer}>
      <div>
        <div className={styles.profileContainer}>
          <img className={styles.profileIcon} src="" alt="" />
          <div className={styles.profileUserContent}>
            <span className={styles.profileUsername}>fadsfdsafs</span>
            <span className={styles.profileUsername}>fadsfas asdfdasafds</span>
          </div>
        </div>
      </div>
      <div>
        <SideBarItem icon="" name="asdfasdf" onclick={() => {}} />
        <SideBarItem icon="" name="asdfasdf" onclick={() => {}} />
        <SideBarItem icon="" name="asdfasdf" onclick={() => {}} />
        <SideBarItem icon="" name="asdfasdf" onclick={() => {}} />
        <SideBarItem icon="" name="asdfasdf" onclick={() => {}} />
      </div>
      <button className={styles.logOutButton}>Log Out</button>
    </div>
  );
};

export default SidebarComponent;
