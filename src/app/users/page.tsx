import AuthGuard from "@/hoc/AuthGuard";
import React from "react";

const Users = () => {
	return <div>Users</div>;
};

export default AuthGuard(Users);
