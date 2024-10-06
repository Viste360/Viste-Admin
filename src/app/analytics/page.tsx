"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const Analytics = () => {
	useEffect(() => {
		sendGAEvent("event", "pageview", { value: "Analytics" });
	}, []);

	return (
		<DashboardLayout>
			<main>Analytics</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Analytics);
