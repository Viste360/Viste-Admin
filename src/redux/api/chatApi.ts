import { axiosInstance } from "@/lib/axios";

export const getUsersChatsApi = async () => {
	const response = await axiosInstance.get("/api/v1//admin/users/messages");

	return response;
};
