"use client";

import SearchInput from "@/components/SearchInput";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GuestShopLayout from "@/components/layout/GuestShopLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatBody from "./components/ChatBody";
import ChatItem from "./components/ChatItem";

const Chat = () => {
	const [searchKeyword, setSearchKeyword] = useState<string>("");

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchKeyword(event.target.value);
	};

	const searchChatHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === "Enter") {
			setSearchKeyword("");
		}
	};

	return (
		<DashboardLayout>
			<GuestShopLayout type="chat">
				<main className="flex gap-4">
					<div className="w-80 flex flex-col items-center gap-4">
						<SearchInput
							value={searchKeyword}
							placeholder="Search"
							onKeyDown={searchChatHandler}
							onChange={onChangeHandler}
							icon="/images/SearchBlack.png"
							className="w-64 focus-visible:border-black-4 border-black-5 rounded-lg placeholder:text-black-4"
						/>
						<div className="border-white-3 w-full border-t-2" />
						<div>
							{[1, 2, 3, 4].map((item, index) => (
								<ChatItem item={item} key={index} />
							))}
						</div>
					</div>
					<div className="flex-1 bg-white-4 rounded flex flex-col">
						<div className="h-[64.5vh]">
							{[1, 2, 3, 4].map((item, index) => (
								<ChatBody item={item} key={index} />
							))}
						</div>

						<ChatInput />
					</div>
				</main>
			</GuestShopLayout>
		</DashboardLayout>
	);
};

export default AuthGuard(Chat);
