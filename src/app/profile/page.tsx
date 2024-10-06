"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const Profile = () => {
	useEffect(() => {
		sendGAEvent({
			hitType: "pageview",
			page: window.location.pathname,
			title: "Profile",
		});
	}, []);

	return (
		<DashboardLayout>
			<main>Profile</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Profile);
