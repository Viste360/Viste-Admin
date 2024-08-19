import React from "react";
import { Button } from "./ui/button";
import { FiDownloadCloud } from "react-icons/fi";

type DashboardHeaderProps = {
	title: string;
	subTitle: string;
	exp?: boolean;
	expCallback?: () => void;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
	title,
	subTitle,
	exp = false,
	expCallback,
}) => {
	return (
		<div className="w-full flex justify-between">
			<div className="flex flex-col justify-between">
				<h3 className="text-black-6">{title}</h3>
				<h6 className="text-black-4">{subTitle}</h6>
			</div>
			{exp && (
				<Button variant="outline" className="space-x-2 font-medium" onClick={expCallback}>
					<FiDownloadCloud size={20} />
					<span>Export Stats</span>
				</Button>
			)}
		</div>
	);
};

export default DashboardHeader;
