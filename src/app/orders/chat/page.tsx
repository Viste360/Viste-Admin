"use client";

import SearchInput from "@/components/SearchInput";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GuestShopLayout from "@/components/layout/GuestShopLayout";
import AuthGuard from "@/hoc/AuthGuard";
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatBody from "./components/ChatBody";
import ChatItem from "./components/ChatItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUsersChatsAction } from "@/redux/actions/chatAction";
import { Spinner } from "@/components/ui/spinner";
import { User } from "@/types/user.type";
import { Chat } from "@/types/chat.type";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { clearNewChat } from "@/redux/slices/chatSlice";

const Chats = () => {
	const [searchKeyword, setSearchKeyword] = useState<string>("");
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [chats, setChats] = useState<Chat[] | undefined>([]);
	const bodyContainer = useRef<HTMLDivElement>(null);
	const { isLoading, usersChats, newMessageStatus, newChat } = useAppSelector(
		(state) => state.chatState
	);
	const dispatch = useAppDispatch();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.value === "") {
			dispatch(getUsersChatsAction());
		}

		setSearchKeyword(event.target.value);
	};

	const searchChatHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === "Enter") {
			dispatch(getUsersChatsAction(searchKeyword));
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
		if (bodyContainer.current) {
			bodyContainer.current.scrollTop = bodyContainer.current.scrollHeight;
		}
	}, [chats]);

	useEffect(() => {
		if (newMessageStatus === "Success" && chats && newChat) {
			setChats([newChat, ...chats]);

			dispatch(clearNewChat());
		}
	}, [newChat, newMessageStatus, chats]);

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
									<div className="h-[66.1vh] flex flex-col">
										<div className="flex items-center gap-4 border-b rounded border-b-white-3 px-4 py-4 bg-white-4">
											<Avatar className="cursor-pointer">
												{selectedUser?.image?.public_id ? (
													<AvatarImage src={selectedUser?.image.url} />
												) : (
													<AvatarImage src="/images/Avatar.png" />
												)}
											</Avatar>

											<h5 className="text-black-3 cursor-pointer">
												{selectedUser?.name}
											</h5>
										</div>
										<div
											ref={bodyContainer}
											className="flex-1 overflow-y-auto scrollbar-hide p-4 flex flex-col-reverse gap-4 scroll-smooth"
										>
											{chats?.map((chat) => (
												<ChatBody chat={chat} key={chat._id} />
											))}
										</div>
									</div>

									<ChatInput userId={selectedUser._id} />
								</>
							)}
						</div>
					</main>
				)}
			</GuestShopLayout>
		</DashboardLayout>
	);
};

export default AuthGuard(Chats);
