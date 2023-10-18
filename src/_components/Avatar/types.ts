import { IUser, IUserData } from "../../_services/UserService/types";

export interface IAvatar {
  withLinearGradient?: boolean;
  user: IUserData | IUser;
  image?: any;
}
