import Axios from "axios";
import { logInStore } from "../LogInServices/LogInServices";
import { ApiConfig } from "./ApiConfig";

export const PurchesListApi = () => {
  const config = {
    headers: { Authorization: `Bearer ${logInStore().getLoginData()?.token}` },
  };

  const getPurcheseList = async () => {
    const response = await Axios.get(
      `${ApiConfig.BASE_URL}/PurchaseService/GetServices`
    );
    return response.data;
  };
  const getPurchesListOrderedByDate = async (urlParams: string) => {
    let queryParams = "?from=12%2F23%2F2022&to=12%2F23%2F2023";
    // urlParams = `?from=${new Date()}&to=${new Date()}`;
    const response = await Axios.get(
      `${ApiConfig.BASE_URL}/ListPurcheseByDate${urlParams}`
    );
    return response.data;
  };

  const DeletePurcheseAdmin = async (id: string) => {
    const response = await Axios.delete(
      `${ApiConfig.BASE_URL}/PurchaseService/deletePurcheseAdminService/${id}`,
      config
    );
    return response.data;
  };

  return {
    getPurcheseList,
    getPurchesListOrderedByDate,
    DeletePurcheseAdmin,
  };
};
