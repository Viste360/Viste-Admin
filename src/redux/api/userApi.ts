import { axiosInstance } from "@/lib/axios";

export const keeploginApi = async () => {
	const response = await axiosInstance.get("/api/v1/admin/login/success");

	return response;
};
