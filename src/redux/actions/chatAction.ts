import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Chat, ChatWithUser, NewChat, UserChat } from "@/types/chat.type";
import { getUsersChatsApi, sendMessageApi } from "../api/chatApi";

export const getUsersChatsAction = createAsyncThunk<
	UserChat[],
	string | undefined,
	{ rejectValue: string }
>("chat/usersChats", async ( keyword , thunkApi) => {
	try {
		const { data } = await getUsersChatsApi(keyword);

		return data.usersChats;
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

export const sendMessageAction = createAsyncThunk<
	ChatWithUser,
	{ payload: NewChat; userId: string },
	{ rejectValue: string }
>("chat/sendMessage", async ({ payload, userId }, thunkApi) => {
	try {
		const { data } = await sendMessageApi(payload, userId);

		return data.chat;
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
