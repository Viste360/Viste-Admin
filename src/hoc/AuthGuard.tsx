"use client";

import Loader from "@/components/Loader";
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { useEffect, ComponentType } from "react";

const AuthGuard = (Component: ComponentType<any>) => {
	const WrappedComponent = (props: any) => {
		const { isLoading, isAuthenticated } = useAppSelector((state) => state.userState);

		useEffect(() => {
			if (!isAuthenticated && !isLoading) {
				redirect("/login");
			}
		}, [isAuthenticated, isLoading]);

		return isLoading ? <Loader /> : <Component {...props} />;
	};

	WrappedComponent.displayName = `AuthGuard(${
		Component.displayName || Component.name || "Component"
	})`;

	return WrappedComponent;
};

export default AuthGuard;
