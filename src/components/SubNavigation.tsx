import React from "react";
import { SubNavigationItem } from "@/types/app.type";
import SubNavItem from "./SubNavItem";

interface SubNavigationProps {
	navItems: SubNavigationItem[];
}

const SubNavigation: React.FC<SubNavigationProps> = ({ navItems }) => {
	return (
		<div className="w-min border-b-2 border-white-3 flex my-4 space-x-2">
			{navItems.map((item, index) => (
				<SubNavItem label={item.label} route={item.route} key={index} />
			))}
		</div>
	);
};

export default SubNavigation;
