import { IUserAccount } from "./userAccount";
import { IUserAuthLink } from "./userAuthLink";

export interface IAuthResponse {
  link: IUserAuthLink;
  account: IUserAccount;
}
