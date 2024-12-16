import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWhatsappDataApi } from "../api/whatsappApi";
import { IDashboardData } from "@/types/whatsapp.type";

export const getWhatsappData = createAsyncThunk<IDashboardData, void, { rejectValue: string }>(
	"whatsapp/dashboardData",
	async (_, thunkApi) => {
		try {
			const {
				data: { messageCommunication, checkInProgress, faqInsights },
			} = await getWhatsappDataApi();

			return { messageCommunication, checkInProgress, faqInsights };
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
	}
);
