import React, { useState } from "react";
import { useQuery } from "react-query";

import { PurcheseTypes } from "../../types/purcheseTypes";
import styles from "./HomePanelTable.module.css";

interface HomePanelTableProps {
  PurcheseLists: PurcheseTypes[];
  deletePurches: any;
}

const HomePanelTable = ({
  PurcheseLists,
  deletePurches,
}: HomePanelTableProps) => {
  return (
    <table className={styles.TableStyle}>
      <thead>
        <tr>
          <th>user name</th>
          <th>service type</th>
          <th>total Price</th>
          <th>operations</th>
        </tr>
      </thead>
      <tbody>
        {PurcheseLists &&
          (PurcheseLists as PurcheseTypes[]).map((n) => (
            <tr key={n.id}>
              <td>{n.users?.username}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "3px",
                  }}
                >
                  {n.serviceEntities?.map((n) => (
                    <div key={n.id} >
                      <span
                        style={{
                          backgroundColor: "#00800029",
                          padding: "2px",
                          borderRadius: "5px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span>{n.name}</span>
                        <span>{n.price}$$</span>
                      </span>
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </td>
              <td>{n.totalPrice}</td>
              <td>
                <span className={styles.buttonMutationContainet}>
                  <span className={styles.buttonsMutation}></span>
                  <span className={styles.buttonsMutation}></span>
                  <span
                    onClick={() => deletePurches(n.id)}
                    className={styles.buttonsMutation}
                  ></span>
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default HomePanelTable;
