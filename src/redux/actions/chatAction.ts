import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserChat } from "@/types/chat.type";
import { getUsersChatsApi } from "../api/chatApi";

export const getUsersChatsAction = createAsyncThunk<UserChat[], void, { rejectValue: string }>(
	"chat/usersChats",
	async (_, thunkApi) => {
		try {
			const { data } = await getUsersChatsApi();

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
	}
);
