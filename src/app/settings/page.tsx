"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Settings = () => {
	return (
		<DashboardLayout>
			<main>Settings</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Settings);
