import { IconType } from "react-icons/lib";

export type NavigationItem = {
	label: string;
	route: string;
	icon: IconType;
};

export type SubNavigationItem = {
	label: string;
	route: string;
};
