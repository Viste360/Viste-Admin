import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import {
	forgotPasswordAction,
	keepLoginAction,
	loginAction,
	logoutAction,
	resetPasswordAction,
	signUpAction,
	verifyEmailAction,
} from "../actions/userAction";
import { User } from "@/types/user.type";

type UserState = {
	isLoading: boolean;
	user: User | null;
	isAuthenticated: boolean;
};

const initialState: UserState = {
	isLoading: true,
	user: null,
	isAuthenticated: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builders) => {
		// keeplogin
		builders.addCase(keepLoginAction.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(keepLoginAction.fulfilled, (state, action: PayloadAction<User>) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.user = action.payload;
		});
		builders.addCase(keepLoginAction.rejected, (state) => {
			state.isLoading = false;
			state.isAuthenticated = false;
		});

		// signUp
		builders.addCase(signUpAction.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(signUpAction.fulfilled, (state) => {
			state.isLoading = false;
		});
		builders.addCase(signUpAction.rejected, (state) => {
			state.isLoading = false;
		});

		// verifyEmail
		builders.addCase(verifyEmailAction.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(verifyEmailAction.fulfilled, (state) => {
			state.isLoading = false;
		});
		builders.addCase(verifyEmailAction.rejected, (state) => {
			state.isLoading = false;
		});

		// login
		builders.addCase(loginAction.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(loginAction.fulfilled, (state, action: PayloadAction<{ user: User }>) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
		});
		builders.addCase(loginAction.rejected, (state) => {
			state.isLoading = false;
			state.isAuthenticated = false;
		});

		// logout
		builders.addCase(logoutAction.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(logoutAction.fulfilled, (state) => {
			state.isLoading = false;
			state.isAuthenticated = false;
			state.user = null;
		});
		builders.addCase(logoutAction.rejected, (state) => {
			state.isLoading = false;
		});

		// forgotPassword
		builders.addCase(forgotPasswordAction.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(forgotPasswordAction.fulfilled, (state) => {
			state.isLoading = false;
		});
		builders.addCase(forgotPasswordAction.rejected, (state) => {
			state.isLoading = false;
		});

		// forgotPassword
		builders.addCase(resetPasswordAction.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(resetPasswordAction.fulfilled, (state) => {
			state.isLoading = false;
		});
		builders.addCase(resetPasswordAction.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
