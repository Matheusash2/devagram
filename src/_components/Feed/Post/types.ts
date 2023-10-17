import { IUser } from "../../../_services/UserService/types";
import { IComment } from "../Comments/types";

export interface IPost {
  id: string;
  user: IUser;
  image: string;
  description: string;
  likes: string[];
  comments: IComment[];
}
