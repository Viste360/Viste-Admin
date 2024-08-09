import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { keepLoginAction } from "../actions/userAction";

type initialState = {
	error?: string | null;
	success: string | null;
	darkMode: boolean;
};

const initialState: initialState = {
	error: null,
	success: null,
	darkMode: false,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
		clearError: (state) => {
			state.error = null;
		},
		setSuccess: (state, action: PayloadAction<string>) => {
			state.success = action.payload;
		},
		clearSuccess: (state) => {
			state.success = null;
		},
		setDarkMode: (state, action: PayloadAction<boolean>) => {
			state.darkMode = action.payload;
		},
	},
	extraReducers: (builders) => {
		builders.addCase(keepLoginAction.rejected, (state, action) => {
			state.error = action.payload;
		});
	},
});

export const { setError, clearError, setSuccess, clearSuccess, setDarkMode } = appSlice.actions;

export default appSlice.reducer;
