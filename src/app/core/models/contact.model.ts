import { Email } from "./email.model";
import { PhoneNumber } from "./phone-number.model";

export type Contact = {
  id?: number,
  profile?: string,
  firstName: string,
  lastName: string,
  nickName?: string,
  address?: string,
  website?: string,
  relationship?: string,
  notes?: string,
  isCompany?:string,
  company?: string,
  emails?: Array<Email>,
  phoneNumbers?: Array<PhoneNumber>,
};
