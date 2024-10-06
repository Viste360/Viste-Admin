"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const Reports = () => {
	useEffect(() => {
	
		sendGAEvent("event", "pageview", { value: "Reports" });
	}, []);

	return (
		<DashboardLayout>
			<main>Reports</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Reports);
