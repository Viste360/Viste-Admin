import axios, { AxiosInstance } from "axios";
import { appConfig } from "./utils";

const { baseURL } = appConfig;

export const axiosInstance: AxiosInstance = axios.create({
	baseURL,
	withCredentials: true,
});
