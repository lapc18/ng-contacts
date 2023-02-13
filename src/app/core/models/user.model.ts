import { Contact } from "./contact.model";
import { UserDetail } from "./user-details.mode";

export type User = {
  username: string,
  email: string,
  details?: UserDetail,
  contacts?: Array<Contact>
};
