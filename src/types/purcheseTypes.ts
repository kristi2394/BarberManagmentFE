import { serviceType } from "./serviceTypes";
import { userTypes } from "./userTypes";

export interface PurcheseTypes {
  id: string;
  serviceEntities: serviceType[];
  Users: userTypes;
  totalPrice: number;
}
