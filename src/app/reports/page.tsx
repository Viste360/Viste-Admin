"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Reports = () => {
	return (
		<DashboardLayout>
			<main>Reports</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Reports);
