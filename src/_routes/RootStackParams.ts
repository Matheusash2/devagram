import { IUser, IUserData } from "../_services/UserService/types";

export type RootStackParamsList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  NewPublication: undefined;
  Profile: IUserData | IUser | undefined;
  EditProfile: IUserData | IUser | undefined;
};
