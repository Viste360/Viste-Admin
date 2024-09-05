import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";

interface LinkPreviewProps {
	url: string;
	type: "admin" | "user";
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url, type }) => {
	const [previewData, setPreviewData] = useState<any>(null);
	const [isYouTube, setIsYouTube] = useState<boolean>(false);
	const [videoId, setVideoId] = useState<string>("");

	useEffect(() => {
		const parseLinkMeta = async () => {
			let modifiedUrl = url;
			if (modifiedUrl.includes("youtube.com/shorts/")) {
				modifiedUrl = modifiedUrl.replace("youtube.com/shorts/", "youtube.com/embed/");
			} else if (modifiedUrl.includes("youtu.be/")) {
				modifiedUrl = modifiedUrl.replace("youtu.be/", "youtube.com/embed/");
			}

			const youtubeRegex =
				/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
			const match = modifiedUrl.match(youtubeRegex);
			if (match && match[1]) {
				setIsYouTube(true);
				setVideoId(match[1]);
			} else {
				try {
					const { data } = await axiosInstance.get(
						`/api/v1/metadata?url=${encodeURIComponent(modifiedUrl)}`
					);
					setPreviewData(data);
				} catch (error) {
					console.error("Error fetching link preview:", error);
				}
			}
		};

		parseLinkMeta();
	}, [url]);

	if (!previewData && !isYouTube) {
		return <></>;
	}

	return (
		<div className="rounded-md p-2 mt-2 flex items-center">
			{isYouTube && videoId ? (
				<div className="w-full aspect-video relative overflow-hidden rounded-lg">
					<iframe
						className="w-full h-full"
						src={`https://www.youtube.com/embed/${videoId}`}
						title="YouTube video player"
						frameBorder="0"
						loading="lazy"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			) : (
				<>
					{previewData?.image && previewData.images !== "" && (
						<img
							src={previewData.image}
							alt={previewData.title}
							className="w-16 h-16 object-cover rounded mr-4"
						/>
					)}
					<div>
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold hover:underline"
						>
							{previewData?.title || url}
						</a>
						<p
							className={`text-sm mt-1 ${
								type === "user" ? "text-gray-100" : "text-gray-800"
							}`}
						>
							{previewData?.description}
						</p>
					</div>
				</>
			)}
		</div>
	);
};

export default LinkPreview;
