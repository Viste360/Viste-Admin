import { CoOrdinate } from "@/types/chat.type";
import React from "react";

interface ChatMapProps {
	coOrdinates: CoOrdinate[];
}

const ChatMap: React.FC<ChatMapProps> = ({ coOrdinates }) => {
	return (
		<iframe
			title={`Google Map`}
			className="w-full aspect-video mt-8"
			style={{ border: 0 }}
			src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&q=${coOrdinates[0].lat},${coOrdinates[0].lon}`}
			allowFullScreen
		></iframe>
	);
};

export default ChatMap;
