import { useState } from "react";
import AddProducts from "../../components/addProducts/AddProducts";
import Admin from "../../components/admin/Admin";
import Barbers from "../../components/barbers/Barbers";
import SidebarComponent from "../../components/sidebar/SidebarComponent";
import { roles } from "../../types/rols";

import styles from "./HomePanel.module.css";

const HomePanel = () => {
  const [openTabName, setOpenTabName] = useState<string>("purcheseTable");
  const hi = [
    {
      name: "purcheseTable",
      type: roles.admins,
      component: <Admin />,
    },
    {
      name: "addServices",
      type: roles.admins,
      component: <AddProducts />,
    },
    {
      name: "purchese services",
      type: roles.barbers,
      component: <Barbers />,
    },
  ];
  return (
    <div className={styles.homePanelContainer}>
      <SidebarComponent />
      {/* {hi.filter((n) => n.name === openTabName)[0].component} */}
      {/* <Admin /> */}
      <Barbers />
      {/* <AddProducts /> */}
    </div>
  );
};

export default HomePanel;
