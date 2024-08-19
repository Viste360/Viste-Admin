"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Chats = () => {
	return (
		<DashboardLayout>
			<main>Chats</main>
		</DashboardLayout>
	);
};

export default AuthGuard(Chats);
