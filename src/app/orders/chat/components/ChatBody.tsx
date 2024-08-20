import React from "react";

interface ChatBodyProps {
	item: number;
}

const ChatBody: React.FC<ChatBodyProps> = ({ item }) => {
	return <div>body {item}</div>;
};

export default ChatBody;
