"use client";

import AuthLayout from "@/components/layout/AuthLayout";
import UnAuthGuard from "@/hoc/UnAuthGuard";
import React from "react";

const SignUp = () => {
	return (
		<AuthLayout>
			<div>SignUp</div>
		</AuthLayout>
	);
};

export default UnAuthGuard(SignUp);
