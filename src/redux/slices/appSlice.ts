import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import {
	forgotPasswordAction,
	loginAction,
	logoutAction,
	resetPasswordAction,
	signUpAction,
	verifyEmailAction,
} from "../actions/userAction";
import { getUsersChatsAction, sendMessageAction } from "../actions/chatAction";

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
		// signUp
		builders.addCase(signUpAction.rejected, (state, action) => {
			state.error = action.payload;
		});
		builders.addCase(signUpAction.fulfilled, (state, action) => {
			state.success = action.payload;
		});

		// verifyEmail
		builders.addCase(verifyEmailAction.rejected, (state, action) => {
			state.error = action.payload;
		});
		builders.addCase(verifyEmailAction.fulfilled, (state, action) => {
			state.success = action.payload;
		});

		// login
		builders.addCase(loginAction.rejected, (state, action) => {
			state.error = action.payload;
		});
		builders.addCase(
			loginAction.fulfilled,
			(state, action: PayloadAction<{ message: string }>) => {
				state.success = action.payload.message;
			}
		);

		// logout
		builders.addCase(logoutAction.rejected, (state, action) => {
			state.error = action.payload;
		});
		builders.addCase(logoutAction.fulfilled, (state, action) => {
			state.success = action.payload;
		});

		// forgotPassword
		builders.addCase(forgotPasswordAction.rejected, (state, action) => {
			state.error = action.payload;
		});
		builders.addCase(forgotPasswordAction.fulfilled, (state, action) => {
			state.success = action.payload;
		});

		// resetPasword
		builders.addCase(resetPasswordAction.rejected, (state, action) => {
			state.error = action.payload;
		});
		builders.addCase(resetPasswordAction.fulfilled, (state, action) => {
			state.success = action.payload;
		});

		// get users chats
		builders.addCase(getUsersChatsAction.rejected, (state, action) => {
			state.error = action.payload;
		});

		// send new message
		builders.addCase(sendMessageAction.rejected, (state, action) => {
			state.error = action.payload;
		});
	},
});

export const { setError, clearError, setSuccess, clearSuccess, setDarkMode } = appSlice.actions;

export default appSlice.reducer;
