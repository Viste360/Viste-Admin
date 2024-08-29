import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Chat } from "@/types/chat.type";
import { formatRelative, subDays } from "date-fns";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

interface ChatBodyProps {
	chat: Chat;
}

const ChatBody: React.FC<ChatBodyProps> = ({ chat }) => {
	const capitalizeFirstLetter = (text: string) => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	};

	return (
		<div
			className={cn(
				chat.sender === "admin" ? "self-end" : "self-start",
				"flex items-center w-11/12 sm:w-10/12 md:w-8/12 lg:w-9/12 xl:w-5/12"
			)}
		>
			<div
				className={cn(
					chat.sender === "admin"
						? "bg-white-5/60 rounded-xl rounded-tr-none"
						: "bg-white-1 rounded-lg",
					"w-full p-3 shadow-sm flex flex-col justify-between gap-2"
				)}
			>
				<div className="flex justify-between w-full break-words">
					<h4
						className={cn(
							chat.sender === "admin" ? "text-dark-1" : "text-black-3",
							"flex-1 break-all"
						)}
					>
						{chat.desc}
					</h4>
					<div className="flex justify-end">
						{chat.sender === "admin" ? (
							<div className="w-8 h-8"></div>
						) : (
							<Button className="rounded-full w-8 h-8 p-0">
								{true ? (
									<FaRegStar size={25} className="text-black-5" />
								) : (
									<FaStar className="text-red-3" size={25} />
								)}
							</Button>
						)}
					</div>
				</div>
				<p className="text-black-4 text-xs self-end">
					{chat.createdAt &&
						capitalizeFirstLetter(
							formatRelative(subDays(new Date(chat?.createdAt), 0), new Date())
						)}
				</p>
			</div>
			<Button className="rounded-full w-8 h-8 p-0 text-black-4">
				<BsThreeDotsVertical size={25} />
			</Button>
		</div>
	);
};

export default ChatBody;
