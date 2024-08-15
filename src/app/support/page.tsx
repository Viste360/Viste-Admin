"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Support = () => {
	return (
		<DashboardLayout>
			<main>Support</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Support);
