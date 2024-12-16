import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import appReducer from "./slices/appSlice";
import chatReducer from "./slices/chatSlice";
import analyticsReducer from "./slices/analyticsSlice";
import whatsappReducer from "./slices/whatsappSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			userState: userReducer,
			appState: appReducer,
			chatState: chatReducer,
			analyticsState: analyticsReducer,
			whatsappState: whatsappReducer,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispath = AppStore["dispatch"];
