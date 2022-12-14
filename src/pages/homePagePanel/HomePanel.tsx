import React from "react";
import HomePanelTable from "../../components/homePanelTable/HomePanelTable";
import SidebarComponent from "../../components/sidebar/SidebarComponent";
import styles from "./HomePanel.module.css";

const HomePanel = () => {
  return (
    <div className={styles.homePanelContainer}>
      <SidebarComponent />
      <HomePanelTable />
    </div>
  );
};

export default HomePanel;
