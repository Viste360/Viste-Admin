import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { IoMdMic } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatInput = () => {
	const [keyword, setKeyword] = useState<string>("");

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setKeyword(event.target.value);
	};

	const keydownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			setKeyword("");
		}
	};

	const submitHandler = () => {
		setKeyword("");
	};

	return (
		<div className="h-24 bg-white-3 rounded-t-[4rem] flex justify-between items-center px-8 gap-4">
			<Button className="text-red-3 rounded-full w-12 h-12 p-0">
				<FaPlus size={30} />
			</Button>
			<Input
				className="flex-1 h-14 px-6 placeholder:text-base placeholder:font-medium border-none ring-0 focus-visible:outline-none focus-visible:ring-0 transition-colors bg-white-1/40 rounded-[5rem] text-black-2  placeholder:text-black-3"
				placeholder="Type here.."
				value={keyword}
				onChange={changeHandler}
				onKeyDown={keydownHandler}
			/>
			<Button className="text-red-3 rounded-full w-12 h-12 p-0 bg-white-1">
				<IoMdMic size={30} />
			</Button>
			<Button
				onClick={submitHandler}
				className="rounded-full w-12 h-12 p-0 bg-red-3 text-white-1"
			>
				<LuSendHorizonal size={30} />
			</Button>
		</div>
	);
};

export default ChatInput;
