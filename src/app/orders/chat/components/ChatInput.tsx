import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { IoMdMic } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { sendImageAction, sendMessageAction } from "@/redux/actions/chatAction";
import MicroPhone from "./MicroPhone";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoCameraOutline, IoFolderOpenOutline, IoImageOutline } from "react-icons/io5";
import { setError } from "@/redux/slices/appSlice";
import { sendFileAction } from "@/redux/actions/chatAction";

const ChatInput: React.FC<{ userId: string }> = ({ userId }) => {
	const [keyword, setKeyword] = useState<string>("");
	const [openMic, setOpenMic] = useState<boolean>(false);
	const [openPopover, setOpenPopover] = useState<boolean>(false);
	const { newMessageStatus } = useAppSelector((state) => state.chatState);
	const dispatch = useAppDispatch();

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setKeyword(event.target.value);
	};

	const keydownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			if (keyword.length > 0) {
				dispatch(sendMessageAction({ payload: { desc: keyword }, userId }));
				setKeyword("");
			}
		}
	};

	const submitHandler = () => {
		if (keyword.length > 0) {
			dispatch(sendMessageAction({ payload: { desc: keyword }, userId }));
			setKeyword("");
		}
	};

	const handleImageUpload = async (image: File): Promise<void> => {
		if (!image) {
			setError("Please upload an image");
			return;
		}

		const formData = new FormData();
		formData.append("file", image);

		dispatch(sendImageAction({ payload: formData, userId }));
		setOpenPopover(false);
	};

	const handleFileUpload = async (file: File): Promise<void> => {
		if (!file) {
			setError("Please upload a file");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);

		dispatch(sendFileAction({ payload: formData, userId }));

		setOpenPopover(false);
	};

	return (
		<>
			<div className="h-24 bg-white-3 lg:rounded-t-[4rem] md:rounded-t-[1rem] flex justify-between items-center lg:px-8 md:px-4 px-2 gap-2 lg:gap-4">
				<Popover open={openPopover}>
					<PopoverTrigger asChild>
						<Button
							disabled={newMessageStatus === "Sending" || openPopover}
							className="text-red-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 p-0"
							onClick={() => {
								setOpenPopover(!openPopover);
							}}
						>
							<FaPlus size={25} />
						</Button>
					</PopoverTrigger>
					<PopoverContent
						onInteractOutside={() => setOpenPopover(false)}
						align="start"
						className="w-52 z-50 mx-auto bg-white-1 shadow-lg rounded-lg p-2"
					>
						{" "}
						<div className="flex p-2 mb-2 rounded-lg transition-colors duration-200 hover:bg-white-4">
							<label className="flex items-center justify-center gap-4 w-full cursor-pointer">
								<IoCameraOutline className="text-2xl text-black-3" />
								<span className="w-8/12 text-black-2 font-semibold">Camera</span>
								<input
									disabled={newMessageStatus === "Sending"}
									hidden
									type="file"
									accept="image/*"
									capture="environment"
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
										const files = e.target.files;
										if (files && files.length === 1) {
											handleImageUpload(files[0]);
										} else if (files && files.length > 1) {
											setError("One Image can be uploaded.");
										}
									}}
								/>
							</label>
						</div>
						<div className="flex p-2 mb-2 rounded-lg transition-colors duration-200 hover:bg-white-4">
							<label className="flex items-center justify-center gap-4 w-full cursor-pointer">
								<IoImageOutline className="text-2xl text-black-3" />
								<span className="w-8/12 text-black-2 font-semibold">Library</span>

								<input
									disabled={newMessageStatus === "Sending"}
									hidden
									type="file"
									accept="image/*"
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
										const files = e.target.files;
										if (files && files.length === 1) {
											handleImageUpload(files[0]);
										} else if (files && files.length > 1) {
											setError("One Image can be uploaded.");
										}
									}}
								/>
							</label>
						</div>
						<div className="flex p-2 mb-2 rounded-lg transition-colors duration-200 hover:bg-white-4">
							<label className="flex items-center justify-center gap-4 w-full cursor-pointer">
								<IoFolderOpenOutline className="text-2xl text-black-3" />
								<span className="w-8/12 text-black-2 font-semibold">File</span>
								<input
									disabled={newMessageStatus === "Sending"}
									hidden
									type="file"
									accept="application/*"
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
										const files = e.target.files;
										if (files && files.length === 1) {
											handleFileUpload(files[0]);
										} else if (files && files.length > 1) {
											setError("One File can be uploaded.");
										}
									}}
								/>
							</label>
						</div>
					</PopoverContent>
				</Popover>
				<Input
					className="flex-1 lg:h-14 h-16 px-6 placeholder:text-base placeholder:font-medium border-none ring-0 focus-visible:outline-none focus-visible:ring-0 transition-colors bg-white-1/40 rounded-[5rem] text-black-2  placeholder:text-black-3"
					placeholder="Type here.."
					value={keyword}
					onChange={changeHandler}
					onKeyDown={keydownHandler}
				/>
				<Button
					disabled={newMessageStatus === "Sending"}
					onClick={() => setOpenMic(true)}
					className="text-red-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 p-0 bg-white-1"
				>
					<IoMdMic size={25} />
				</Button>
				<Button
					onClick={submitHandler}
					disabled={newMessageStatus === "Sending"}
					className="rounded-full w-10 h-10 lg:w-12 lg:h-12 p-0 bg-red-3 text-white-1"
				>
					<LuSendHorizonal size={25} />
				</Button>
			</div>
			<MicroPhone openMic={openMic} setOpenMic={setOpenMic} setKeyword={setKeyword} />
		</>
	);
};

export default ChatInput;
