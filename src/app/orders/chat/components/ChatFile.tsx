import { File } from "@/types/chat.type";
import React from "react";

interface ChatFileProps {
	file: File;
}

const ChatFile: React.FC<ChatFileProps> = ({ file }) => {
	return (
		<div className="my-3">
			<a href={file?.url} download>
				{file?.name}
			</a>
		</div>
	);
};

export default ChatFile;
