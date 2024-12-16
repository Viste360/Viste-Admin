import { axiosInstance } from "@/lib/axios";

export const getWhatsappDataApi = async () => {
	const response = await axiosInstance.get("/api/v1/admin/whatsapp/dashboard-metrics");

	return response;
};
