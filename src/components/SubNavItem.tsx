import Link from "next/link";
import { SubNavigationItem } from "@/types/app.type";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type SubNavItemProps = SubNavigationItem & {
	highlight?: boolean;
};

const SubNavItem: React.FC<SubNavItemProps> = ({ label, route, highlight = true }) => {
	const pathname = usePathname();
	const isActive = pathname === route;

	return (
		<Link href={route}>
			<div
				className={cn(
					"flex items-center h-11 px-3 py-2 transition-colors font-medium border-b-2 border-transparent -mb-[2px]",
					highlight
						? isActive
							? "bg-red-11 text-red-3 border-red-3"
							: "bg-transparent text-black-4 hover:text-red-3"
						: ""
				)}
			>
				<span>{label}</span>
			</div>
		</Link>
	);
};

export default SubNavItem;
