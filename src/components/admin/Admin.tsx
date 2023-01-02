import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { PurchesListApi } from "../../libs/ApiServices/PurchesListApi";
import { Input, InputType } from "../../UI/input/Input";
import { QueryBuilder } from "../../Utils/QueryBuilder";

import HomePanelTable from "../homePanelTable/HomePanelTable";

const Admin = () => {
  const [params, setParams] = useState("");
  const [dateInputs, setDateInputs] = useState<{
    from?: Date;
    to?: Date;
  }>({
    from: undefined,
    to: undefined,
  });
  const {
    data: purcheseList,
    refetch,
    isFetched,
  } = useQuery(
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
  console.log(purcheseList, "FETCHED");

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
    <div>
      <div>
        <Input
          type={InputType.date}
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
  );
};

export default Admin;
