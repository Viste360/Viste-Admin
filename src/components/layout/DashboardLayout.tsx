import Image from "next/image";
import React, { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";
import SearchInput from "../SearchInput";
import { LuFlag, LuHome, LuLayers, LuLogOut, LuSettings, LuUsers } from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";
import { NavigationItem } from "@/types/app.type";
import NavItem from "../NavItem";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/actions/userAction";
import Link from "next/link";

interface DashboardLayoutProps {
	children: ReactNode;
}

const mainNavigation: NavigationItem[] = [
	{
		label: "Dashboard",
		route: "/",
		icon: LuHome,
	},
	{
		label: "User Management",
		route: "/users",
		icon: LuUsers,
	},
	{
		label: "Incident Reporting",
		route: "/reports",
		icon: LuFlag,
	},
	{
		label: "GuestShop Orders",
		route: "/orders",
		icon: LuLayers,
	},
	{
		label: "Analytics",
		route: "/analytics",
		icon: FiBarChart2,
	},
];

const footerNavigation: NavigationItem[] = [
	{
		label: "Support",
		route: "/support",
		icon: FiBarChart2,
	},

	{
		label: "Settings",
		route: "/settings",
		icon: LuSettings,
	},
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	const [searchKeyword, setSearchKeyword] = useState<string>("");
	const { user } = useAppSelector((state) => state.userState);
	const dispatch = useAppDispatch();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchKeyword(event.target.value);
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === "Enter") {
			setSearchKeyword("");
		}
	};

	const LogoutHandler = () => {
		dispatch(logoutAction());
	};

	return (
		<div className="flex h-screen bg-red-3">
			<div className="w-96 bg-red-3 text-white-1 py-8 px-4 flex flex-col items-center justify-between">
				<div className="flex flex-col gap-10 items-center w-full px-4">
					<div className="flex flex-col gap-6">
						<Image
							src={"/images/VisteAdmin.png"}
							alt="viste-admin-logo"
							width={120}
							height={27}
						/>
						<SearchInput
							value={searchKeyword}
							placeholder="search"
							onChange={onChangeHandler}
							onKeyDown={handleKeyDown}
							className="w-72 bg-red-5 focus-visible:border-red-5 border-red-5 placeholder:text-white-1"
							icon="/images/Search.png"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						{" "}
						{mainNavigation.map((item) => (
							<NavItem
								label={item.label}
								route={item.route}
								icon={item.icon}
								key={item.route}
							/>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-3 px-4">
					<div className="flex flex-col gap-2">
						{" "}
						{footerNavigation.map((item) => (
							<NavItem
								label={item.label}
								route={item.route}
								icon={item.icon}
								key={item.route}
							/>
						))}
					</div>

					<hr className="text-red-5" />
					<div className="flex justify-between p-2">
						<div className="flex items-center gap-3">
							<Link href="/profile">
								<Avatar className="w-11 h-11">
									<Image fill src={"/images/Profile.png"} alt="viste-admin" />
								</Avatar>
							</Link>

							<div className="flex flex-col justify-center">
								<Link href="/profile" className="font-medium">
									{user?.name}
								</Link>
								<h5 className="text-red-7">{user?.email}</h5>
							</div>
						</div>
						<Button className="text-red-10" onClick={LogoutHandler}>
							<LuLogOut size={24} />
						</Button>
					</div>
				</div>
			</div>
			<div className="bg-white-1 flex-1 rounded-tl-[32px] mt-8 p-8">{children}</div>
		</div>
	);
};

export default DashboardLayout;
