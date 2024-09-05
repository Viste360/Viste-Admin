"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearError, clearSuccess } from "@/redux/slices/appSlice";
import { FC, PropsWithChildren, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
	const { error, success } = useAppSelector((state) => state.appState);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(clearError());
		}
	}, [error]);

	useEffect(() => {
		if (success) {
			toast.success(success);
			dispatch(clearSuccess());
		}
	}, [success]);

	return (
		<>
			{children}
			<ToastContainer />
		</>
	);
};

export default ToastProvider;
