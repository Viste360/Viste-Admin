"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import GuestShopLayout from "@/components/layout/GuestShopLayout";
import AuthGuard from "@/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect } from "react";

const Orders = () => {
	useEffect(() => {
		

		
		sendGAEvent("event", "pageview", { value: "GuestShop Order" });
	}, []);
	return (
		<DashboardLayout>
			<GuestShopLayout>
				<main>Orders</main>
			</GuestShopLayout>
		</DashboardLayout>
	);
};

export default AuthGuard(Orders);
