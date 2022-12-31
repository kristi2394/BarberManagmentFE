import { serviceType } from "./serviceTypes";
import { userTypes } from "./userTypes";

export interface PurcheseTypes {
  id?: string;
  serviceEntities?: serviceType[];
  users?: userTypes;
  totalPrice?: number;
  dateTime?: Date | string;
}
