import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { UserChat } from "@/types/chat.type";
import { getUsersChatsAction } from "../actions/chatAction";

type ChatState = {
	isLoading: boolean;
	usersChats: UserChat[];
};

const initialState: ChatState = {
	isLoading: true,
	usersChats: [],
};

export const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {},
	extraReducers: (builders) => {
		// get users chats
		builders.addCase(getUsersChatsAction.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(
			getUsersChatsAction.fulfilled,
			(state, action: PayloadAction<UserChat[]>) => {
				state.isLoading = false;
				state.usersChats = action.payload;
			}
		);
		builders.addCase(getUsersChatsAction.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export const {} = chatSlice.actions;

export default chatSlice.reducer;
