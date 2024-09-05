import { User } from "./user.type";

export interface Chat {
	_id: string;
	desc: string;
	sender: "user" | "admin";
	user: string;
	image?: Image;
	metaData?: object;
	coOrdinates?: CoOrdinate[];
	file?: File;
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

export type Image = {
	public_id: string;
	url: string;
};

export type CoOrdinate = {
	lat: string;
	lon: string;
};

export type File = {
	public_id: string;
	url: string;
	name: string;
};
