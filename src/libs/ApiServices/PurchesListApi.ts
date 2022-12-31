import Axios from "axios";
import { ApiConfig } from "./ApiConfig";

export const PurchesListApi = () => {
  const getPurcheseList = async () => {
    const response = await Axios.get(
      `${ApiConfig.BASE_URL}/PurchaseService/GetServices`
    );
    return response.data;
  };
  const getPurchesListOrderedByDate = async (urlParams: any) => {
    let queryParams = "?from=12%2F23%2F2022&to=12%2F23%2F2023";
    // urlParams = `?from=${new Date()}&to=${new Date()}`;
    const response = await Axios.get(
      `${ApiConfig.BASE_URL}/ListPurcheseByDate${urlParams}`
    );
    return response.data;
  };

  return {
    getPurcheseList,
    getPurchesListOrderedByDate,
  };
};
