"use client";

import { useEffect, useState, useRef } from "react";
import MicPopup from "./MicPopup";

declare global {
	interface Window {
		webkitSpeechRecognition: any;
	}
}

interface MicroPhoneProps {
	setKeyword: React.Dispatch<React.SetStateAction<string>>;
	openMic: boolean;
	setOpenMic: React.Dispatch<React.SetStateAction<boolean>>;
}

const MicroPhone: React.FC<MicroPhoneProps> = ({ setKeyword, openMic, setOpenMic }) => {
	const [isRecording, setIsRecording] = useState<boolean>(false);
	const recognitionRef = useRef<any>(null);

	// start recording
	const startRecording = () => {
		if (!recognitionRef.current) {
			recognitionRef.current = new window.webkitSpeechRecognition();
			recognitionRef.current.continuous = true;
			recognitionRef.current.interimResults = true;

			recognitionRef.current.onresult = (event: any) => {
				let transcript = event.results[event.results.length - 1][0].transcript;

				transcript = transcript.charAt(0).toUpperCase() + transcript.slice(1);

				if (event.results[event.results.length - 1].isFinal) {
					if (
						!transcript.trim().endsWith(".") &&
						!transcript.trim().endsWith("?") &&
						!transcript.trim().endsWith("!")
					) {
						transcript += ".";
					}
				}

				setKeyword(transcript);

				if (
					transcript.trim().endsWith(".") ||
					transcript.trim().endsWith("?") ||
					transcript.trim().endsWith("!")
				) {
					closeModal();
				}
			};

			recognitionRef.current.start();
			setIsRecording(true);
		}
	};

	// stop recording
	const stopRecording = () => {
		if (recognitionRef.current) {
			recognitionRef.current.stop();
			recognitionRef.current = null;
		}
		setIsRecording(false);
	};

	// close popup
	const closeModal = () => {
		stopRecording();
		setOpenMic(false);
	};

	useEffect(() => {
		if (openMic && !isRecording) {
			startRecording();
		}

		return () => {
			stopRecording();
		};
	}, [openMic]);

	return <MicPopup openModal={openMic} closeModal={closeModal} />;
};

export default MicroPhone;
