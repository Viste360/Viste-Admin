import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { getGoogleAnalyticsData } from "../actions/analyticsAction";
import { GoogleAnalyticsData } from "@/types/analytics.type";

type AnalyticsState = {
	isLoading: boolean;
	reportData: GoogleAnalyticsData | null;
};

const initialState: AnalyticsState = {
	isLoading: true,
	reportData: null,
};

export const analyticsSlice = createSlice({
	name: "analytics",
	initialState,
	reducers: {},
	extraReducers: (builders) => {
		// get google analytics
		builders.addCase(getGoogleAnalyticsData.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(
			getGoogleAnalyticsData.fulfilled,
			(state, action: PayloadAction<GoogleAnalyticsData>) => {
				state.isLoading = false;
				state.reportData = action.payload;
			}
		);
		builders.addCase(getGoogleAnalyticsData.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export const {} = analyticsSlice.actions;

export default analyticsSlice.reducer;
