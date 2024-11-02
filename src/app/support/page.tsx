"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/components/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const Support = () => {
	useEffect(() => {
		sendGAEvent("event", "pageview", { value: "Support" });
	}, []);

	return (
		<DashboardLayout>
			<main>Support</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Support);
