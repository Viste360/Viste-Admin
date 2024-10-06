"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const Users = () => {
	useEffect(() => {
		sendGAEvent({
			hitType: "pageview",
			page: window.location.pathname,
			title: "Users",
		});
	}, []);

	return (
		<DashboardLayout>
			<main>Users</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Users);
