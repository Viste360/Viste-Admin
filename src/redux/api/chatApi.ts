import { axiosInstance } from "@/lib/axios";
import { NewChat } from "@/types/chat.type";

export const getUsersChatsApi = async (keyword?: string | undefined) => {
	let uri = "/api/v1/admin/users/messages";

	if (keyword) {
		uri = `/api/v1/admin/users/messages?keyword=${keyword}`;
	}

	const response = await axiosInstance.get(uri);

	return response;
};

export const sendMessageApi = async (payload: NewChat, userId: string) => {
	const response = await axiosInstance.post(`/api/v1/admin/message/user/${userId}`, payload);

	return response;
};

export const sendImageApi = async (payload: FormData, userId: string) => {
	const response = await axiosInstance.post(
		`/api/v1/admin/message/image/user/${userId}`,
		payload
	);

	return response;
};

export const sendFileApi = async (payload: FormData, userId: string) => {
	const response = await axiosInstance.post(`/api/v1/admin/message/file/user/${userId}`, payload);

	return response;
};
