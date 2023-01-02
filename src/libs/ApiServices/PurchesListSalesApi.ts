import Axios from "axios";
import { logInStore } from "../LogInServices/LogInServices";
import { ApiConfig } from "./ApiConfig";

export const PurchesListSalesApi = () => {
  const config = {
    headers: { Authorization: `Bearer ${logInStore().getLoginData()?.token}` },
  };

  const getPurcheseList = async () => {
    const response = await Axios.get(`${ApiConfig.BASE_URL}/userServiceList`);
    return response.data;
  };
  const getPurchesListOrderedByDate = async (urlParams: string) => {
    let queryParams = "?from=12%2F23%2F2022&to=12%2F23%2F2023";
    // urlParams = `?from=${new Date()}&to=${new Date()}`;
    const response = await Axios.get(
      `${ApiConfig.BASE_URL}/ListUserPurcheses/barber/byDate${urlParams}`,
      config
    );
    return response.data;
  };

  const postPurcheseSales = async (post: any) => {
    const response = await Axios.post(
      `${ApiConfig.BASE_URL}/PurchaseService/BarberPostPurchase`,
      post,
      config
    );
    return response.data;
  };

  const DeletePurchese = async (id: string) => {
    const response = await Axios.delete(
      `${ApiConfig.BASE_URL}/hi/${id}`,
      config
    );
    return response.data;
  };

  return {
    getPurcheseList,
    getPurchesListOrderedByDate,
    postPurcheseSales,
    DeletePurchese,
  };
};
