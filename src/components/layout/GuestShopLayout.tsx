import { SubNavigationItem } from "@/types/app.type";
import DashboardHeader from "../DashboardHeader";
import SubNavigation from "../SubNavigation";
import UtilsBar from "../UtilsBar";

interface GuestShopLayoutProps {
	children: React.ReactNode;
	type?: "orders" | "chat";
}

const navItems: SubNavigationItem[] = [
	{
		label: "Orders",
		route: "/orders",
	},
	{
		label: "Chat",
		route: "/orders/chat",
	},
];

const GuestShopLayout: React.FC<GuestShopLayoutProps> = ({ children, type = "orders" }) => {
	const exportOrders = () => {
		console.log("Export");
	};

	const searchOrder = (keyword: string): void => {
		console.log("search item: ", keyword);
	};

	return (
		<div className="flex flex-col gap-3">
			<DashboardHeader
				title="GuestShop Orders"
				subTitle="Tagline will go here"
				exp={type === "orders" ? true : false}
				expCallback={exportOrders}
			/>
			<SubNavigation navItems={navItems} />
			{type === "orders" && <UtilsBar onSearch={searchOrder} />}
			<div className="bg-white-1 flex-1">{children}</div>
		</div>
	);
};

export default GuestShopLayout;
