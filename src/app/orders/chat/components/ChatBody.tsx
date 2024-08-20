import { Chat } from "@/types/chat.type";
import React from "react";

interface ChatBodyProps {
	chat: Chat;
}

const ChatBody: React.FC<ChatBodyProps> = ({ chat }) => {
	return <div>body {chat.desc}</div>;
};

export default ChatBody;
