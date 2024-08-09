import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import appReducer from "./slices/appSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			userState: userReducer,
			appState: appReducer
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispath = AppStore["dispatch"];
