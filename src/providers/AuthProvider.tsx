"use client";

import { keepLoginAction } from "@/redux/actions/userAction";
import { useAppDispatch } from "@/redux/hooks";
import { FC, PropsWithChildren, useEffect } from "react";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		// dispatch(keepLoginAction());
	}, []);

	return <>{children}</>;
};

export default AuthProvider;
