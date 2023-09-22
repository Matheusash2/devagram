import { IUser } from "../../../_services/UserService/types";
import { IComments } from "../Comments/types";

export interface IPost {
  id: string;
  user: IUser;
  image: string;
  description: string;
  likes: string[];
  comments: IComments[];
}
