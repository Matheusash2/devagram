import axios, { Method } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = "https://devagram-node-nextjs-fcix.vercel.app/api";
const instance = axios.create({
  baseURL: URL,
  timeout: 30000,
});

export const api = async (
  endpoint: string,
  method: Method,
  body?: any,
  newHeaders?: any
) => {
  const token = await AsyncStorage.getItem("token");

  let headers: any = newHeaders
    ? newHeaders
    : { "Content-Type": "application/json" };

  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  console.log(
    `executando: ${URL}${endpoint}, 
        metodo ${method}, 
        body ${JSON.stringify(body)}, 
        header ${JSON.stringify(headers)}`
  );

  return instance.request({
    url: endpoint,
    method: method,
    data: body ? body : "",
    headers: headers,
  });
};

const post = async (url: string, data: any, headers?: any) => {
  return api(url, "POST", data, headers);
};
const put = async (url: string, data?: any, headers?: any) => {
  return api(url, "PUT", data, headers);
};
const get = async (url: string, headers?: any) => {
  return api(url, "GET", headers);
};

export { post, put, get };
