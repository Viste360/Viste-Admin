import { Image } from "@/types/chat.type";
import React from "react";

interface ChatImageProps {
	image: Image;
}

const ChatImage: React.FC<ChatImageProps> = ({ image }) => {
	return (
		<div className="my-3">
			<img src={image?.url} alt={image?.public_id} className="w-full h-auto"  />
		</div>
	);
};

export default ChatImage;
