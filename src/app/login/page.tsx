"use client";

import UnAuthGuard from "@/hoc/UnAuthGuard";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const Login = () => {
	const states = useAppSelector((state) => state);

	console.log(states);

	return <div>Login</div>;
};

export default UnAuthGuard(Login);
