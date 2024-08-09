"use client";
import Loader from "@/components/Loader";
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const UnAuthGuard = (Component: any) => {
	return (props: any) => {
		const { isLoading, isAuthenticated } = useAppSelector((state) => state.userState);

		useEffect(() => {
			if (isAuthenticated && !isLoading) {
				redirect("/");
			}
		}, [isAuthenticated, isLoading]);

		return isLoading ? <Loader /> : <Component {...props} />;
	};
};

export default UnAuthGuard;
