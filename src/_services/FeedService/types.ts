export interface ILogin {
  login: string;
  senha: string;
}

export interface IUser {
  id: string | null;
  name: string | null;
  email: string | null;
  token: string | null;
  avatar: string | null;
}

export interface IUserData {
  id: string;
  name: string;
  email: string;
  avatar: string;
  followers: number;
  following: number;
  posts: number;
  index: number;
}
