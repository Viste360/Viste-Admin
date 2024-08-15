"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Dashboard = () => {
	return <DashboardLayout>
		<main>
			Dashboard
		</main>
	</DashboardLayout>
};

export default AuthGuard(Dashboard);
