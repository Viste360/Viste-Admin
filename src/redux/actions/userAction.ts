import { LoginUser, SignUpUser, User, ResetPassword } from "@/types/user.type";
import {
	forgotPasswordApi,
	keeploginApi,
	loginApi,
	logoutApi,
	resetPasswordApi,
	signUpApi,
	verifyEmailApi,
} from "../api/userApi";
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

			return thunkApi.rejectWithValue("Something went wrong");
		}
	}
);

export const signUpAction = createAsyncThunk<string, SignUpUser, { rejectValue: string }>(
	"user/signUp",
	async (payload, thunkApi) => {
		try {
			const { data } = await signUpApi(payload);

			return data.message;
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

export const verifyEmailAction = createAsyncThunk<string, string, { rejectValue: string }>(
	"user/verify",
	async (payload, thunkApi) => {
		try {
			const { data } = await verifyEmailApi(payload);

			return data.message;
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

export const loginAction = createAsyncThunk<
	{ user: User; message: string },
	LoginUser,
	{ rejectValue: string }
>("user/login", async (payload, thunkApi) => {
	try {
		const { data } = await loginApi(payload);

		return data;
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

export const logoutAction = createAsyncThunk<string, void, { rejectValue: string }>(
	"user/logout",
	async (_, thunkApi) => {
		try {
			const { data } = await logoutApi();

			return data.message;
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

export const forgotPasswordAction = createAsyncThunk<
	string,
	{ email: string },
	{ rejectValue: string }
>("user/forgotPassword", async (payload, thunkApi) => {
	try {
		const { data } = await forgotPasswordApi(payload);

		return data.message;
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

export const resetPasswordAction = createAsyncThunk<
	string,
	{ payload: ResetPassword; token: string },
	{ rejectValue: string }
>(
	"user/resetPassword",

	async ({ payload, token }, thunkApi) => {
		try {
			const { data } = await resetPasswordApi(payload, token);

			return data.message;
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
