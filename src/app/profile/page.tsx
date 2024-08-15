"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Profile = () => {
	return (
		<DashboardLayout>
			<main>Profile</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Profile);
