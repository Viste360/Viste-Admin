import { User } from "@/types/user.type";
import { keeploginApi } from "../api/userApi";
import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const keepLoginAction = createAsyncThunk<User, void, { rejectValue: string }>(
	"user/keeplogin",
	async (_, thunkApi) => {
		try {
			const { data } = await keeploginApi();
			return data.user;
		} catch (err) {
			if (err instanceof AxiosError) {
				if (err.response?.data.message) {
					return thunkApi.rejectWithValue(err.response.data.message);
				} else {
					return thunkApi.rejectWithValue(err.message);
				}
			}
		}
	}
);
