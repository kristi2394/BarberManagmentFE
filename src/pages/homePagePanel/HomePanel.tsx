import AddProducts from "../../components/addProducts/AddProducts";
import Admin from "../../components/admin/Admin";
import Barbers from "../../components/barbers/Barbers";
import SidebarComponent from "../../components/sidebar/SidebarComponent";

import styles from "./HomePanel.module.css";

const HomePanel = () => {
  return (
    <div className={styles.homePanelContainer}>
      <SidebarComponent />
      {/* <Admin /> */}
      {/* <Barbers /> */}
      <AddProducts />
    </div>
  );
};

export default HomePanel;
