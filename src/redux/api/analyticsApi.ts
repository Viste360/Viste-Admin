import { axiosInstance } from "@/lib/axios";

export const getGoogleAnalyticsDataApi = async () => {
	const response = await axiosInstance.get("/api/v1/admin/google/analytics");

	return response;
};
