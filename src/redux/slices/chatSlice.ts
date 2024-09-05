import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { Chat, ChatWithUser, UserChat } from "@/types/chat.type";
import {
	getUsersChatsAction,
	sendFileAction,
	sendImageAction,
	sendMessageAction,
} from "../actions/chatAction";

type ChatState = {
	isLoading: boolean;
	usersChats: UserChat[];
	newMessageStatus: null | "Sending" | "Failed" | "Success";
	newChat?: null | Chat;
};

const initialState: ChatState = {
	isLoading: true,
	usersChats: [],
	newMessageStatus: null,
	newChat: null,
};

export const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		clearNewChat: (state) => {
			state.newMessageStatus = null;
			state.newChat = null;
		},
	},
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

		// send new message
		builders.addCase(sendMessageAction.pending, (state) => {
			state.newMessageStatus = "Sending";
		});
		builders.addCase(
			sendMessageAction.fulfilled,
			(state, action: PayloadAction<ChatWithUser>) => {
				state.newMessageStatus = "Success";

				const newChat = action.payload;
				const userIndex = state.usersChats.findIndex(
					(item) => item.user._id === newChat.user._id
				);
				if (userIndex !== -1) {
					state.usersChats[userIndex].chats.unshift({
						...newChat,
						user: newChat.user._id,
					});

					const updatedUser = state.usersChats.splice(userIndex, 1)[0];
					state.usersChats.unshift(updatedUser);
				} else {
					state.usersChats.unshift({
						user: newChat.user,
						chats: [
							{
								...newChat,
								user: newChat.user._id,
							},
						],
					});
				}

				state.newChat = { ...newChat, user: newChat.user._id };
			}
		);
		builders.addCase(sendMessageAction.rejected, (state) => {
			state.newMessageStatus = "Failed";
		});

		// send new image
		builders.addCase(sendImageAction.pending, (state) => {
			state.newMessageStatus = "Sending";
		});
		builders.addCase(
			sendImageAction.fulfilled,
			(state, action: PayloadAction<ChatWithUser>) => {
				state.newMessageStatus = "Success";

				const newChat = action.payload;
				const userIndex = state.usersChats.findIndex(
					(item) => item.user._id === newChat.user._id
				);
				if (userIndex !== -1) {
					state.usersChats[userIndex].chats.unshift({
						...newChat,
						user: newChat.user._id,
					});

					const updatedUser = state.usersChats.splice(userIndex, 1)[0];
					state.usersChats.unshift(updatedUser);
				} else {
					state.usersChats.unshift({
						user: newChat.user,
						chats: [
							{
								...newChat,
								user: newChat.user._id,
							},
						],
					});
				}

				state.newChat = { ...newChat, user: newChat.user._id };
			}
		);
		builders.addCase(sendImageAction.rejected, (state) => {
			state.newMessageStatus = "Failed";
		});

		// send new file
		builders.addCase(sendFileAction.pending, (state) => {
			state.newMessageStatus = "Sending";
		});
		builders.addCase(sendFileAction.fulfilled, (state, action: PayloadAction<ChatWithUser>) => {
			state.newMessageStatus = "Success";

			const newChat = action.payload;
			const userIndex = state.usersChats.findIndex(
				(item) => item.user._id === newChat.user._id
			);
			if (userIndex !== -1) {
				state.usersChats[userIndex].chats.unshift({
					...newChat,
					user: newChat.user._id,
				});

				const updatedUser = state.usersChats.splice(userIndex, 1)[0];
				state.usersChats.unshift(updatedUser);
			} else {
				state.usersChats.unshift({
					user: newChat.user,
					chats: [
						{
							...newChat,
							user: newChat.user._id,
						},
					],
				});
			}

			state.newChat = { ...newChat, user: newChat.user._id };
		});
		builders.addCase(sendFileAction.rejected, (state) => {
			state.newMessageStatus = "Failed";
		});
	},
});

export const { clearNewChat } = chatSlice.actions;

export default chatSlice.reducer;
