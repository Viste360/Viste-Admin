"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React, { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const Dashboard = () => {
	useEffect(() => {
		sendGAEvent({
			hitType: "pageview",
			page: window.location.pathname,
			title: "Dashboard",
		});
	}, []);

	return (
		<DashboardLayout>
			<main>Dashboard</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Dashboard);
