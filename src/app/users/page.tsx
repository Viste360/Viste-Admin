'use client'

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Users = () => {
	return (
		<DashboardLayout>
			<main>Users</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Users);
