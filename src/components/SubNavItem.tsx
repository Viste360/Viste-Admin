import Link from "next/link";
import { NavigationItem, SubNavigationItem } from "@/types/app.type";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type SubNavItemProps = SubNavigationItem & {
	highlight?: boolean;
};

const NavItem: React.FC<SubNavItemProps> = ({ label, route, highlight = true }) => {
	const pathname = usePathname();
	const isActive = pathname.startsWith(route);

	return (
		<Link href={route}>
			<div
				className={cn(
					"flex items-center h-10 w-full px-3 py-2 rounded transition-colors font-medium",
					highlight
						? isActive
							? "bg-white-1 text-red-3"
							: "bg-transparent text-white-1 hover:bg-red-5"
						: ""
				)}
			>
				<span>{label}</span>
			</div>
		</Link>
	);
};

export default NavItem;
