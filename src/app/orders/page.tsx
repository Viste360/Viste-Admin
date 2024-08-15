"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Orders = () => {
	return (
		<DashboardLayout>
			<main>Orders</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Orders);
