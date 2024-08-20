import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { User } from "@/types/user.type";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Chat } from "@/types/chat.type";

interface ChatItemProps {
	user: User;
	selectedUser: User | null;
	selectChat: (user: User) => void;
	lastChat: Chat | undefined;
}

const ChatItem: React.FC<ChatItemProps> = ({ user, selectedUser, selectChat, lastChat }) => {
	const isSelected: boolean = selectedUser?._id === user._id;

	return (
		<div
			className={cn(
				isSelected ? "bg-red-11 border-b-white-3/0" : "border-b-white-3/100",
				"px-4 py-2 flex flex-col h-32 cursor-pointer justify-center gap-4 border-b rounded"
			)}
			onClick={() => selectChat(user)}
		>
			<div className="flex items-center gap-2">
				<div
					className={cn(
						isSelected ? "bg-transparent" : "bg-red-6",
						"w-2 h-2 rounded-full"
					)}
				></div>

				<div className="relative">
					<Avatar className="-m-[2px]">
						{user.image?.public_id ? (
							<AvatarImage src={user.image.url} />
						) : (
							<AvatarImage src="/images/Avatar.png" />
						)}
					</Avatar>
					<div className="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-green-2 ring-[2px] ring-white-1"></div>
				</div>
				<div className="flex h-full justify-between flex-1 gap-2">
					<div className="flex flex-col justify-center">
						<h5 className={cn(isSelected ? "text-red-3" : "text-black-3")}>
							{user.name}
						</h5>
						<p
							className={cn(
								isSelected ? "text-red-4" : "text-black-4",
								"line-clamp-1 overflow-hidden text-ellipsis"
							)}
						>
							{user.email}
						</p>
					</div>
					<p
						className={cn(
							isSelected ? "text-red-4" : "text-black-4",
							"line-clamp-2 overflow-hidden text-ellipsis"
						)}
					>
						{lastChat &&
							formatDistanceToNow(new Date(lastChat?.createdAt), {
								addSuffix: true,
							})}
					</p>
				</div>
			</div>
			<p
				className={cn(
					isSelected ? "text-red-4" : "text-black-4",
					"line-clamp-2 overflow-hidden text-ellipsis"
				)}
			>
				{lastChat?.desc}
			</p>
		</div>
	);
};

export default ChatItem;
