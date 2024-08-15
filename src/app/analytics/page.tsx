"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Analytics = () => {
	return (
		<DashboardLayout>
			<main>Analytics</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Analytics);
