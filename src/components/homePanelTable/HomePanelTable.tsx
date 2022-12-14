import React, { useState } from "react";
import { PurcheseTypes } from "../../types/purcheseTypes";
import styles from "./HomePanelTable.module.css";

const renderInputField = (
  checkEditId: Boolean,
  fieldType: string | number | undefined,
  onChange: (n: any) => void,
  value: string | number | undefined
) => {
  if (!checkEditId) return <span>{fieldType}</span>;
  return (
    <input onChange={(e) => onChange(e.target.value)} value={value}></input>
  );
};

const nullPurchese: PurcheseTypes = {
  id: "",
  serviceEntities: [{ id: "", name: "", price: 0 }],
  totalPrice: 0,
  Users: { id: "", username: "", password: "", PurchesedServiceEntity: [] },
};
const tableDataTester: PurcheseTypes[] = [
  {
    id: "1",
    totalPrice: 0,
    Users: { username: "adfsfds" },
    serviceEntities: [
      {
        name: "service",
        price: 0,
      },
    ],
  },
  {
    id: "2",
    totalPrice: 0,
    Users: { username: "adfsfds" },
    serviceEntities: [
      {
        name: "service1",
        price: 0,
      },
      {
        name: "service2",
        price: 0,
      },
      {
        name: "service3",
        price: 0,
      },
      {
        name: "service4",
        price: 0,
      },
      {
        name: "service5",
        price: 0,
      },
      {
        name: "service6",
        price: 0,
      },
      {
        name: "service7",
        price: 0,
      },
      {
        name: "service8",
        price: 0,
      },
      {
        name: "service9",
        price: 0,
      },
      {
        name: "service10",
        price: 0,
      },
    ],
  },
  {
    id: "3",
    totalPrice: 0,
    Users: { username: "adfsfds" },
    serviceEntities: [
      {
        name: "service",
        price: 0,
      },
    ],
  },
  {
    id: "4",
    totalPrice: 0,
    Users: { username: "adfsfds" },
    serviceEntities: [
      {
        name: "service",
        price: 0,
      },
    ],
  },
  {
    id: "5",
    totalPrice: 0,
    Users: { username: "adfsfds" },
    serviceEntities: [
      {
        name: "service",
        price: 0,
      },
    ],
  },
  {
    id: "6",
    totalPrice: 0,
    Users: { username: "adfsfds" },
    serviceEntities: [
      {
        name: "service",
        price: 0,
      },
    ],
  },
];

const HomePanelTable = () => {
  const [selectedEdit, setSelectedEdit] = useState<string>();
  const [changeFields, setChangeFields] = useState<PurcheseTypes>(nullPurchese);
  const [tableData, setTableData] =
    useState<Array<PurcheseTypes>>(tableDataTester);

  const deletePurchese = (id?: string) => {
    setTableData((n) => n.filter((n) => n.id != id));
  };

  return (
    <table className={styles.TableStyle}>
      <thead>
        <tr>
          <th>username</th>
          <th>serviceEntities</th>
          <th>totalPrice</th>
          <th>operations</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((n) => (
            <tr>
              <td>{n.Users?.username}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "3px",
                  }}
                >
                  {n.serviceEntities?.map((n) => (
                    <div>
                      <span
                        style={{
                          backgroundColor: "gray",
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
                    onClick={() => deletePurchese(n.id)}
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
