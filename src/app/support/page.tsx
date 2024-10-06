"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const Support = () => {
	useEffect(() => {
		sendGAEvent({
			hitType: "pageview",
			page: window.location.pathname,
			title: "Support",
		});
	}, []);

	return (
		<DashboardLayout>
			<main>Support</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Support);
