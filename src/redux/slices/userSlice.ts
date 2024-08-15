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
	formSubmitting: boolean;
	formSubmitted: boolean;
};

const initialState: UserState = {
	isLoading: true,
	user: null,
	isAuthenticated: false,
	formSubmitting: false,
	formSubmitted: false,
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
			state.formSubmitting = true;
			state.formSubmitted = false;
		});
		builders.addCase(signUpAction.fulfilled, (state) => {
			state.formSubmitting = false;
			state.formSubmitted = true;
		});
		builders.addCase(signUpAction.rejected, (state) => {
			state.formSubmitting = false;
			state.formSubmitted = false;
		});

		// verifyEmail
		builders.addCase(verifyEmailAction.pending, (state) => {
			state.formSubmitting = true;
			state.formSubmitted = false;
		});
		builders.addCase(verifyEmailAction.fulfilled, (state) => {
			state.formSubmitting = false;
			state.formSubmitted = true;
		});
		builders.addCase(verifyEmailAction.rejected, (state) => {
			state.formSubmitting = false;
			state.formSubmitted = false;
		});

		// login
		builders.addCase(loginAction.pending, (state) => {
			state.formSubmitting = true;
			state.formSubmitted = false;
		});
		builders.addCase(loginAction.fulfilled, (state, action: PayloadAction<{ user: User }>) => {
			state.formSubmitting = false;
			state.formSubmitted = true;
			state.isAuthenticated = true;
			state.user = action.payload.user;
		});
		builders.addCase(loginAction.rejected, (state) => {
			state.formSubmitting = false;
			state.isAuthenticated = false;
			state.formSubmitted = false;
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
			state.formSubmitting = true;
			state.formSubmitted = false;
		});
		builders.addCase(forgotPasswordAction.fulfilled, (state) => {
			state.formSubmitting = false;
			state.formSubmitted = true;
		});
		builders.addCase(forgotPasswordAction.rejected, (state) => {
			state.formSubmitting = false;
			state.formSubmitted = false;
		});

		// resetPassword
		builders.addCase(resetPasswordAction.pending, (state) => {
			state.formSubmitting = true;
			state.formSubmitted = false;
		});
		builders.addCase(resetPasswordAction.fulfilled, (state) => {
			state.formSubmitting = false;
			state.formSubmitted = true;
		});
		builders.addCase(resetPasswordAction.rejected, (state) => {
			state.formSubmitting = false;
			state.formSubmitted = false;
		});
	},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
