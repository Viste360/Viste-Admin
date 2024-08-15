import Image from "next/image";
import React, { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";
import { Avatar } from "../ui/avatar";
import SearchInput from "../SearchInput";

interface DashboardLayoutProps {
	children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	const [searchKeyword, setSearchKeyword] = useState<string>("");

	const SearchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchKeyword(event.target.value);
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === "Enter") {
			setSearchKeyword("");
		}
	};

	return (
		<div className="flex h-screen bg-red-3">
			<div className="w-96 bg-red-3 text-white-1 p-8 flex flex-col items-center justify-between">
				<div className="flex flex-col gap-6">
					<Image
						src={"/images/VisteAdmin.png"}
						alt="viste-admin-logo"
						width={120}
						height={300}
					/>
					<SearchInput
						value={searchKeyword}
						placeholder="search"
						onChange={SearchHandler}
						onKeyDown={handleKeyDown}
						className="w-64 bg-red-5"
						icon="/images/Search.png"
					/>
				</div>
				<div> Navigation </div>
				<div>Footer </div>
			</div>
			<div className="bg-white-1 flex-1 rounded-tl-[32px] mt-8 p-8">{children}</div>
		</div>
	);
};

export default DashboardLayout;
