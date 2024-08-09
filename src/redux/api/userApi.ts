import { axiosInstance } from "@/lib/axios";
import { SignUpUser, LoginUser, ResetPassword } from "@/types/user.type";

export const keeploginApi = async () => {
	const response = await axiosInstance.get("/api/v1/admin/login/success");

	return response;
};

export const signUpApi = async (payload: SignUpUser) => {
	const response = await axiosInstance.post("/api/v1/admin/user/new", payload);

	return response;
};

export const verifyEmailApi = async (token: string) => {
	const response = await axiosInstance.get("/api/v1/admin/mail/verify" + token);

	return response;
};

export const loginApi = async (payload: LoginUser) => {
	const response = await axiosInstance.post("/api/v1/admin/user/login", payload);

	return response;
};

export const logoutApi = async () => {
	const response = await axiosInstance.get("/api/v1/admin/logout");

	return response;
};

export const forgotPasswordApi = async (payload: string) => {
	const response = await axiosInstance.post("/api/v1/admin/password/recovery", payload);

	return response;
};

export const resetPasswordApi = async (payload: ResetPassword, token: string) => {
	const response = await axiosInstance.put("/api/v1/admin/password/reset" + token, payload);

	return response;
};
