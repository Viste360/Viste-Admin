import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Chat, ChatWithUser, NewChat, UserChat } from "@/types/chat.type";
import { getGoogleAnalyticsDataApi } from "../api/analyticsApi";
import { GoogleAnalyticsData } from "@/types/analytics.type";

export const getGoogleAnalyticsData = createAsyncThunk<
	GoogleAnalyticsData,
	void,
	{ rejectValue: string }
>("analytics/googleAnalytics", async (_, thunkApi) => {
	try {
		const {
			data: { reportData, monthlyData },
		} = await getGoogleAnalyticsDataApi();

		return { reportData, monthlyData };
	} catch (err) {
		if (err instanceof AxiosError) {
			if (err.response?.data.message) {
				return thunkApi.rejectWithValue(err.response.data.message);
			} else {
				return thunkApi.rejectWithValue(err.message);
			}
		}

		return thunkApi.rejectWithValue("Something went wrong");
	}
});
