
import { useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { PurchesListApi } from "../../libs/ApiServices/PurchesListApi";
import { PurcheseTypes } from "../../types/purcheseTypes";
import { serviceType } from "../../types/serviceTypes";

import Button, { ButtonType } from "../../UI/button/Button";
import { Input, InputType } from "../../UI/input/Input";

import styles from "./Barbers.module.css";

const Barbers = () => {
  const [serviceId, setServiceId] = useState<string[]>([]);

  const { data: listServices }: { data: serviceType[] | undefined } = useQuery(
    "servicesList",
    PurchesListApi().getServicesList
  );

  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(listServices?.length).fill(false)
  );

  const { mutate: mutateBarbers, data: tiolale } = useMutation(
    "mutateServices",
    PurchesListApi().postPurchases,
    {
      onSuccess: (response: any) => {
        console.log(response, tiolale);

      },
    }
  );

  const addService = (add: boolean, value?: string, indexInp?: number) => {
    const updatedCheckedState = checkedState.map(
      (singleInp: boolean, index: number) =>
        index === indexInp ? !singleInp : singleInp
    );

    setCheckedState(updatedCheckedState);
    if (value) {
      setServiceId((prev: Array<string>) => {
        if (add) {
          return [...prev, value];
        }
        return prev.filter((newData) => newData != value);

      });
    }
  };

  const postServicesPurchese = () => {
    const postServiceBarber: PurcheseTypes = {
      serviceEntities: serviceId.map((idServiceBarber) => {
        return { id: idServiceBarber };
      }),
    };
    const updatedCheckedStateOnPurchase = checkedState.map(
      (singleInp: boolean) => (singleInp = false)
    );

    setCheckedState(updatedCheckedStateOnPurchase);
    mutateBarbers(postServiceBarber);

  };

  if (!listServices) {
    return <></>;
  }

  return (
    <div className={styles.barberContainer}>
      <div className={styles.servicesContent}>
        {listServices.map((listService, index) => (
          <div
            key={listService.id}
            className={`${styles.barberServicesHolder}
              ${checkedState[index] ? styles.isChecked : ""} `}
          >
            <Input
              type={InputType.checkbox}
              name={listService.name}
              id={listService.id}
              onChange={(e) =>
                addService(
                  (e?.target as HTMLInputElement).checked,
                  listService?.id,
                  index
                )
              }
              customClass={styles.inputCheckServices}
              value={listService.id}
            />
            <label htmlFor={listService.id}>{listService.name}</label>
          </div>
        ))}
      </div>

      <Button type={ButtonType.button} onClick={postServicesPurchese}>
        Shite
      </Button>
    </div>
  );
};

export default Barbers;
