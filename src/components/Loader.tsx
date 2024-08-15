import React from "react";
import { Spinner } from "./ui/spinner";

const Loader = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<Spinner className="text-black-4"/>
		</div>
	);
};

export default Loader;
