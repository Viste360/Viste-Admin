import Image from "next/image";
import React, { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";
import SearchInput from "../SearchInput";
import { LuLogOut } from "react-icons/lu";
import { SubNavigationItem } from "@/types/app.type";
import NavItem from "../NavItem";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/actions/userAction";
import Link from "next/link";
import DashboardHeader from "../DashboardHeader";

interface GuestShopLayoutProps {
	children: ReactNode;
	exp?: boolean;
}

const mainNavigation: SubNavigationItem[] = [
	{
		label: "Orders",
		route: "/orders",
	},
	{
		label: "Chat",
		route: "/orders/chat",
	},
];

const GuestShopLayout: React.FC<GuestShopLayoutProps> = ({ children, exp = true }) => {
	const exportOrders = () => {
		console.log("Export");
	};

	return (
		<div className="flex flex-col">
			<DashboardHeader
				title="GuestShop Orders"
				subTitle="Tagline will go here"
				exp={exp}
				expCallback={exportOrders}
			/>
			<div className=""></div>
			<div className="bg-white-1 flex-1">{children}</div>
		</div>
	);
};

export default GuestShopLayout;
