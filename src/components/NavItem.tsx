import Link from "next/link";
import { NavigationItem } from "@/types/app.type";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type NavItemProps = NavigationItem & {
	highlight?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ label, route, icon: Icon, highlight = true }) => {
	const pathname = usePathname();
	const isActive = route === "/" ? pathname === route : pathname.startsWith(route);

	return (
		<Link href={route}>
			<div
				className={cn(
					"flex items-center h-12 w-full px-3 py-2 rounded-md transition-colors font-medium",
					highlight
						? isActive
							? "bg-white-1 text-red-3"
							: "bg-transparent text-white-1 hover:bg-red-5"
						: ""
				)}
			>
				<Icon className="mr-4" size={24} />
				<span>{label}</span>
			</div>
		</Link>
	);
};

export default NavItem;
