import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { keepLoginAction } from "../actions/userAction";
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
			state.isAuthenticated = false
		});
	},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
