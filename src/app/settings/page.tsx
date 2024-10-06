"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const Settings = () => {
	useEffect(() => {
		sendGAEvent({
			hitType: "pageview",
			page: window.location.pathname,
			title: "Settings",
		});
	}, []);

	return (
		<DashboardLayout>
			<main>Settings</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Settings);
