import axios, { AxiosInstance } from "axios";

export const appConfig = {
	baseURL: "http://localhost:8000/api",
};

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: appConfig.baseURL,
	withCredentials: true,
});
