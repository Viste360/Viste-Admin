"use client";

import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Dashboard = () => {
	return <div>Dashboard</div>;
};

export default AuthGuard(Dashboard);
