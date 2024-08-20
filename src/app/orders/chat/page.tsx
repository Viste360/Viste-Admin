"use client";

import SearchInput from "@/components/SearchInput";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GuestShopLayout from "@/components/layout/GuestShopLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatBody from "./components/ChatBody";
import ChatItem from "./components/ChatItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUsersChatsAction } from "@/redux/actions/chatAction";
import { Spinner } from "@/components/ui/spinner";
import { User } from "@/types/user.type";
import { Chat } from "@/types/chat.type";

const Chat = () => {
	const [searchKeyword, setSearchKeyword] = useState<string>("");
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [chats, setChats] = useState<Chat[] | undefined>([]);
	const { isLoading, usersChats } = useAppSelector((state) => state.chatState);
	const dispatch = useAppDispatch();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchKeyword(event.target.value);
	};

	const searchChatHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === "Enter") {
			setSearchKeyword("");
			setSelectedUser(null);
			setChats([]);
		}
	};

	const selectChat = (user: User) => {
		const userChats = usersChats.find((item) => item.user._id === user._id);

		setSelectedUser(user);
		setChats(userChats?.chats);
	};

	useEffect(() => {
		dispatch(getUsersChatsAction());
	}, []);

	return (
		<DashboardLayout>
			<GuestShopLayout type="chat">
				{isLoading ? (
					<div className="flex items-center justify-center h-[76.3vh]">
						<Spinner className="text-black-4 -mt-48" />
					</div>
				) : (
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
							<div className="h-[68.1vh] overflow-y-auto scrollbar-hide w-full">
								{usersChats.map((item) => (
									<ChatItem
										user={item.user}
										key={item.user._id}
										selectedUser={selectedUser}
										selectChat={selectChat}
										lastChat={item.chats[0]}
									/>
								))}
							</div>
						</div>
						<div className="flex-1 bg-white-4 rounded flex flex-col">
							{!selectedUser ? (
								<div className="h-[76.3vh] flex items-center justify-center">
									<h4>Select a Chat</h4>
								</div>
							) : (
								<>
									<div className="h-[66.1vh] overflow-y-auto scrollbar-hide">
										{chats?.map((chat) => (
											<ChatBody chat={chat} key={chat._id} />
										))}
									</div>

									<ChatInput />
								</>
							)}
						</div>
					</main>
				)}
			</GuestShopLayout>
		</DashboardLayout>
	);
};

export default AuthGuard(Chat);
