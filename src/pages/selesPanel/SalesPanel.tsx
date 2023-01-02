import React, { useEffect, useLayoutEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import HomePanelTable from "../../components/homePanelTable/HomePanelTable";
import ProductServicesPanel from "../../components/ProductServicesPanel/ProductServicesPanel";
import { PurchesListSalesApi } from "../../libs/ApiServices/PurchesListSalesApi";
import { QueryBuilder } from "../../Utils/QueryBuilder";
import styles from "./SalesPanel.module.css";

const SalesPanel = () => {
  const [params, setParams] = useState("");
  const [dateInputs, setDateInputs] = useState<{
    from?: Date | string;
    to?: Date | string;
  }>({
    from: new Date().toLocaleDateString(),
    to: undefined,
  });
  const { data: purcheseList, refetch } = useQuery(
    ["product", params],
    async () => await PurchesListSalesApi().getPurchesListOrderedByDate(params)
  );
  const { mutate: deleteServiceApiMutation, data: loginData } = useMutation(
    "deletePurches",
    PurchesListSalesApi().DeletePurchese,
    {
      onSuccess: (response) => {
        refetch();
      },
    }
  );
  const getUserData = () => {};
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

  const quryDate = () => {
    setParams(
      new QueryBuilder("").addQuery("from", dateInputs.from).getQueryPath()
    );
  };

  useLayoutEffect(() => {
    quryDate();
  }, []);

  const setInputsFields = (
    e: any,
    fiels: "from" | "to",
    state: (n: (n: any) => any) => void
  ) => {
    state((n: any) => {
      return { ...n, [fiels]: e.target.value };
    });
  };

  console.log(purcheseList);

  return (
    <div>
      <div>
        <input
          type="date"
          onChange={(e) => setInputsFields(e, "from", setDateInputs)}
          value={dateInputs.from}
        />
        <input
          onChange={(e) => setInputsFields(e, "to", setDateInputs)}
          type="date"
        />
        <button onClick={onSearchDate}>asdfasdf</button>
      </div>
      <div className={styles.salesMenu}>
        <HomePanelTable PurcheseLists={purcheseList} deletePurches={() => {}} />
        <ProductServicesPanel />
      </div>
    </div>
  );
};

export default SalesPanel;
