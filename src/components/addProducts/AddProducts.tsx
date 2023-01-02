import { useState } from "react";
import { useMutation } from "react-query";
import { PurchesListApi } from "../../libs/ApiServices/PurchesListApi";
import { serviceType } from "../../types/serviceTypes";
import Button from "../../UI/button/Button";
import Input, { InputType } from "../../UI/input/Input";

const AddProducts = () => {
  const [servicePost, setServicePost] = useState<serviceType>({
    price: 0,
    name: "",
  });

  const { mutate: mutateServices, data: tiolale } = useMutation(
    "list",
    PurchesListApi().postServicesAdmin,
    {
      onSuccess: (response: any) => {},
    }
  );

  const valuesHandler = (e: any) => {
    setServicePost((prev: serviceType) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSumbitHanlder = (e: any) => {
    e.preventDefault();
    mutateServices(servicePost);
  };

  console.log(servicePost);
  return (
    <div>
      <form>
        <Input
          type={InputType.text}
          onChange={valuesHandler}
          value={servicePost.name}
          name="name"
        />
        <Input
          min={0}
          type={InputType.number}
          value={servicePost.price}
          onChange={valuesHandler}
          name="price"
        />
        <Button onClick={onSumbitHanlder}>sub</Button>
      </form>
    </div>
  );
};

export default AddProducts;
