import { useState } from "react";
import { serviceType } from "../../types/serviceTypes";
import styles from "./ProductServicesPanel.module.css";

const serviceListTestsData: serviceType[] = [
  {
    id: "s1",
    name: "s1",
    price: 0,
  },
  {
    id: "s2",
    name: "s2",
    price: 1,
  },
  {
    id: "s3",
    name: "s3",
    price: 2,
  },
  {
    id: "s4",
    name: "s4",
    price: 3,
  },
  {
    id: "s5",
    name: "s5",
    price: 4,
  },
];

const ProductServicesPanel = () => {
  const [checkedButtons, setCheckedButtons] = useState<any>([]);
  const checkButton = (checked: string) => {
    if (checkedButtons.includes(checked)) {
      setCheckedButtons((n: any) => {
        return n.filter((s) => s !== checked);
      });
      return;
    }
    setCheckedButtons((n: any) => {
      return [...n, checked];
    });
  };
  return (
    <div className={styles.serviceContainer}>
      {serviceListTestsData &&
        serviceListTestsData.map((n) => (
          <div
            className={styles.checkboxHi}
            onClick={() => checkButton(n.id as string)}
            key={n.id}
          >
            <h5>{n.name + " " + n.price}</h5>
            <div
              className={`${styles.checkboxContainer} ${
                checkedButtons.includes(n.id)
                  ? styles.checked
                  : styles.notChecked
              }`}
            ></div>
            <div></div>
          </div>
        ))}
    </div>
  );
};

export default ProductServicesPanel;
