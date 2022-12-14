import React from "react";
import styles from "./HomePanelTable.module.css";

const HomePanelTable = () => {
  const tableData = [
    { id: 1, table: "adsfas", tester: "fdasfasdfads", menu: "asdffadsf" },
    { id: 2, table: "adsfas", tester: "fdasfasdfads", menu: "asdffadsf" },
    { id: 3, table: "adsfas", tester: "fdasfasdfads", menu: "asdffadsf" },
    { id: 4, table: "adsfas", tester: "fdasfasdfads", menu: "asdffadsf" },
    { id: 5, table: "adsfas", tester: "fdasfasdfads", menu: "asdffadsf" },
  ];
  return (
    <table className={styles.TableStyle}>
      <thead>
        <tr>
          <th>asdfasdfasd</th>
          <th>asdfasdadsfs</th>
          <th>asdfds</th>
          <th>dsfasdfadsfds</th>
          <th>dsfsdfasfsdfsdfadfads</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((n) => (
            <tr>
              <td>{n.id}</td>
              <td>{n.table}</td>
              <td>{n.tester}</td>
              <td>{n.menu}</td>
              <td>
                <span className={styles.buttonMutationContainet}>
                  <span className={styles.buttonsMutation}></span>
                  <span className={styles.buttonsMutation}></span>
                  <span className={styles.buttonsMutation}></span>
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default HomePanelTable;
