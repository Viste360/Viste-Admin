import axios, { AxiosInstance } from "axios";

export const appConfig = {
	baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
};

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: appConfig.baseURL,
	withCredentials: true,
});
