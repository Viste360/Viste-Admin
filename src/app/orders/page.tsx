"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import GuestShopLayout from "@/components/layout/GuestShopLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Orders = () => {
	return (
		<DashboardLayout>
			<GuestShopLayout>
				<main>Orders</main>
			</GuestShopLayout>
		</DashboardLayout>
	);
};

export default AuthGuard(Orders);
