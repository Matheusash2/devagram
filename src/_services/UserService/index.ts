import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DevagramApiService from "../DevagramApiService";
import { ILogin, IUser } from "./types";

const login = async (body: ILogin) => {
  const { data } = await DevagramApiService.post("/login", body);
  await AsyncStorage.setItem("token", data.token);
  updateCurrentUser();
};

const updateCurrentUser = async () => {
  const user = await DevagramApiService.get("/usuario");
  await AsyncStorage.setItem("name", user.data.nome);
  await AsyncStorage.setItem("email", user.data.email);
  await AsyncStorage.setItem("id", user.data._id);
  await AsyncStorage.setItem("avatar", user.data.avatar);
};

const getCurrentUser = async () => {
  const user: IUser = {
    id: await AsyncStorage.getItem("id"),
    name: await AsyncStorage.getItem("name"),
    email: await AsyncStorage.getItem("email"),
    token: await AsyncStorage.getItem("token"),
    avatar: await AsyncStorage.getItem("avatar"),
  };

  return user;
};

const register = async (body: FormData) => {
  await DevagramApiService.post("/cadastro", body, {
    "Content-Type": "multipart/form-data",
  });
};

const update = async (body: FormData) => {
  await DevagramApiService.put("/usuario", body, {
    "Content-Type": "multipart/form-data",
  });
};

const search = async (filter: string) => {
  return await DevagramApiService.get(`/pesquisa?filtro=${filter}`);
};

const getProfile = async (id: string) => {
  return await DevagramApiService.get(`/pesquisa?id=${id}`);
};

const toggleFollow = async (id: string) => {
  return await DevagramApiService.put(`/seguir?id=${id}`);
};

export { login, getCurrentUser, register, search, getProfile, toggleFollow, update };
