import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Chat } from "@/types/chat.type";
import { formatRelative, subDays } from "date-fns";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import LinkPreview from "./LinkPreview";
import ChatImage from "./ChatImage";
import ChatFile from "./ChatFile";
import ChatMap from "./ChatMap";
import Linkify from "linkify-react";

interface ChatBodyProps {
	chat: Chat;
}

const ChatBody: React.FC<ChatBodyProps> = ({ chat }) => {
	const [urls, setUrls] = useState<string[]>([]);

	const capitalizeFirstLetter = (text: string) => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	};

	useEffect(() => {
		const urlPattern =
			/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/|facebook\.com\/|m\.facebook\.com\/|twitter\.com\/|instagram\.com\/|linkedin\.com\/|t\.co\/|[^ \n\r]+?\.[a-z]{2,})(?:[^\s]*)/gi;

		const matchedUrls = chat.desc.match(urlPattern) || [];

		setUrls(matchedUrls);
	}, [chat]);

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
					<div
						className={cn(
							chat.sender === "admin" ? "text-dark-1" : "text-black-3",
							"flex-1 break-words"
						)}
					>
						<Linkify
							as="h4"
							options={{
								defaultProtocol: "https",
								className: "link-url",
								nl2br: true,
							}}
						>
							{chat.desc}
						</Linkify>

						{urls.map((url, i) => {
							return <LinkPreview key={i} url={url} type={chat.sender} />;
						})}

						{chat.image?.url && <ChatImage image={chat.image} />}
						{chat.file?.url && <ChatFile file={chat.file} />}
						{chat.coOrdinates && chat.coOrdinates.length > 0 && (
							<ChatMap coOrdinates={chat.coOrdinates} />
						)}
					</div>
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
