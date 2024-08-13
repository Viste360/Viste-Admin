"use client";

import AuthLayout from "@/components/layout/AuthLayout";
import UnAuthGuard from "@/hoc/UnAuthGuard";
import React from "react";

const Login = () => {
	return (
		<AuthLayout>
			<div>login</div>
		</AuthLayout>
	);
};

export default UnAuthGuard(Login);
