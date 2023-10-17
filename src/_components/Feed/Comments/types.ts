import { IUser } from "../../../_services/UserService/types";

export interface IComment {
  name: string;
  message: string;
  userId: string;
}

export interface ICommentsComponent {
  comments: IComment[];
  commentIsActive: boolean;
  userLogged: IUser;
  idPost: string;
}
