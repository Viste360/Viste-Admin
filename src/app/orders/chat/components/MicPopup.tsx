"use client";

import { CustomDialogContent, Dialog } from "@/components/ui/dialog";
import { FaMicrophone } from "react-icons/fa";

interface MicPopProps {
	openModal: boolean;
	closeModal: () => void;
}

const MicPopup: React.FC<MicPopProps> = ({ openModal, closeModal }) => {
	return (
		<Dialog open={openModal} onOpenChange={() => closeModal()}>
			<CustomDialogContent className="h-60 flex justify-center items-center bg-white-3 border-none">
				<div className="rounded-full bg-red-500 p-6 cursor-pointer">
					<FaMicrophone size={40} />
				</div>
				<h3 className="text-center mt-4">Speak</h3>
			</CustomDialogContent>
		</Dialog>
	);
};

export default MicPopup;
