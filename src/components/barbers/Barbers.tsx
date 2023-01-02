import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { PurchesListApi } from "../../libs/ApiServices/PurchesListApi";
import { PurcheseTypes } from "../../types/purcheseTypes";
import { serviceType } from "../../types/serviceTypes";
import Button, { ButtonType } from "../../UI/button/Button";
import { Input, InputType } from "../../UI/input/Input";
import styles from "./Barbers.module.css";

const dummy: serviceType[] = [
  {
    id: "1",
    name: "inp1",
    price: 0,
  },
  {
    id: "2",
    name: "inp2",
    price: 0,
  },
  {
    id: "3",
    name: "inp3",
    price: 0,
  },
];

const Barbers = () => {
  const [serviceList, setServiceList] = useState<string[]>([]);
  const { data: listServices } = useQuery(
    "UsersList",
    PurchesListApi().getServicesList
  );

  console.log(listServices, "lista");

  const { mutate: mutateBarbers, data: tiolale } = useMutation(
    "list",
    PurchesListApi().postPurchases,
    {
      onSuccess: (response: any) => {
        console.log(response, tiolale, "sss");
      },
    }
  );

  const addService = (add: boolean, value?: string) => {
    if (value) {
      setServiceList((n: Array<string>) => {
        if (add) {
          return [...n, value];
        }
        return n.filter((s) => s != value);
      });
    }
  };

  const postServicesPurchese = () => {
    const postBody: PurcheseTypes = {
      serviceEntities: serviceList.map((n) => {
        return { id: n };
      }),
    };
    mutateBarbers(postBody);
  };

  if (!listServices) {
    return <></>;
  }

  return (
    <div className={styles.barberContainer}>
      {listServices.map((listService: any) => (
        <>
          <Input
            type={InputType.checkbox}
            name={listService.name}
            id={listService.id}
            onChange={(e) => addService(e?.target.checked, listService?.id)}
            value={listService.id}
          />
          <label htmlFor={listService.id}>{listService.name}</label>
        </>
      ))}
      <Button type={ButtonType.button} onClick={postServicesPurchese}>
        Shite
      </Button>
    </div>
  );
};

export default Barbers;
