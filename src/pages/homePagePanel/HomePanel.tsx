import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import HomePanelTable from "../../components/homePanelTable/HomePanelTable";
import SidebarComponent from "../../components/sidebar/SidebarComponent";
const nullPurchese: PurcheseTypes = {
  id: "",
  serviceEntities: [{ id: "", name: "", price: 0 }],
  totalPrice: 0,
  users: { id: "", username: "", password: "", purchesedServiceEntity: [] },
};
const tableDataTester: PurcheseTypes[] = [
  {
    id: "1",
    totalPrice: 0,
    users: { username: "adfsfds" },
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
    users: { username: "adfsfds" },
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
    users: { username: "adfsfds" },
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
    users: { username: "adfsfds" },
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
    users: { username: "adfsfds" },
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
    users: { username: "adfsfds" },
    serviceEntities: [
      {
        name: "service",
        price: 0,
      },
    ],
  },
];
import { PurchesListApi } from "../../libs/ApiServices/PurchesListApi";
import { PurcheseTypes } from "../../types/purcheseTypes";
import { QueryBuilder } from "../../Utils/QueryBuilder";
import styles from "./HomePanel.module.css";

const HomePanel = () => {
  const [selectedEdit, setSelectedEdit] = useState<string>();
  const [changeFields, setChangeFields] = useState<PurcheseTypes>(nullPurchese);
  const [params, setParams] = useState("");
  const [tableDataTests, setTableDataTests] =
    useState<Array<PurcheseTypes>>(tableDataTester);
  const [dateInputs, setDateInputs] = useState<{
    from?: Date;
    to?: Date;
  }>({
    from: undefined,
    to: undefined,
  });
  const { data: purcheseList, refetch } = useQuery(
    ["product", params],
    async () => await PurchesListApi().getPurchesListOrderedByDate(params)
  );
  const { mutate: deleteServiceApiMutation, data: loginData } = useMutation(
    "deletePurches",
    PurchesListApi().DeletePurcheseAdmin,
    {
      onSuccess: (response) => {
        refetch();
      },
    }
  );

  const deletePurchese = (id?: string) => {
    if (!id) return;
    deleteServiceApiMutation(id);
  };

  const onSearchDate = () => {
    const queryChangePro = new QueryBuilder("")
      .addQuery("from", dateInputs.from)
      .getQueryPath();
    const queryChange = new QueryBuilder("")
      .addQuery("from", dateInputs.from)
      .addQuery("to", dateInputs.to)
      .getQueryPath();
    if (!dateInputs.from) {
      setParams("");
      return;
    }
    if (!dateInputs.to) {
      setParams(queryChangePro);
      return;
    }
    if (dateInputs.from && dateInputs.to) {
      setParams(queryChange);
      return;
    }
  };

  useEffect(() => {}, []);

  const setInputsFields = (
    e: any,
    fiels: "from" | "to",
    state: (n: (n: any) => any) => void
  ) => {
    state((n: any) => {
      return { ...n, [fiels]: e.target.value };
    });
  };

  console.log(params);

  console.log("sdfasdasdfasdfasf", purcheseList);
  return (
    <div className={styles.homePanelContainer}>
      <SidebarComponent />
      <div>
        <div>
          <input
            type="date"
            onChange={(e) => setInputsFields(e, "from", setDateInputs)}
          />
          <input
            onChange={(e) => setInputsFields(e, "to", setDateInputs)}
            type="date"
          />
          <button onClick={onSearchDate}>asdfasdf</button>
        </div>
        <HomePanelTable
          PurcheseLists={purcheseList}
          deletePurches={deletePurchese}
        />
      </div>
    </div>
  );
};

export default HomePanel;
