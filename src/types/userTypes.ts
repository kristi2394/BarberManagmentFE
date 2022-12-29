import { PurcheseTypes } from "./purcheseTypes";

export interface userTypes {
  id?: string;
  username?: string;
  password?: string;
  rols?: string;
  purchesedServiceEntity?: PurcheseTypes[];
}
