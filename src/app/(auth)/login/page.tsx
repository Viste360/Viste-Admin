"use client";

import UnAuthGuard from "@/hoc/UnAuthGuard";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";

const Login = () => {
	const dispatch = useAppDispatch();
	return <div>login</div>;
};

export default UnAuthGuard(Login);
