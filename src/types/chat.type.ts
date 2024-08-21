import { User } from "./user.type";

export interface Chat {
	_id: string;
	desc: string;
	sender: "user" | "admin";
	user: string;
	image?: {
		public_id: string;
		url: string;
	};
	metaData?: object;
	coOrdinates?: [
		{
			lat: string;
			lon: string;
		}
	];
	file?: {
		public_id: string;
		url: string;
		name: string;
	};
	createdAt: Date;
	updatedAt: Date;
}

export type UserChat = {
	user: User;
	chats: Chat[];
};

export type NewChat = {
	desc: string;
};

export type ChatWithUser = Chat & {
	user: User;
};
