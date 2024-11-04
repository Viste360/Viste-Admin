import humanizeDuration from "humanize-duration";
import numeral from "numeral";

export const formatNumber = (num: number) => numeral(num).format("0.[0]a");
export const formatBounceRate = (num: number) => (num * 100).toFixed(1) + "%";

export const formatDuration = (seconds: number) => {
	const formattedDuration = humanizeDuration(seconds * 1000, {
		units: ["d", "h", "m", "s"],
		round: true,
		largest: 2,
		delimiter: " ",
		spacer: "",
		language: "en",
	})
		.replace(/days?/g, "d")
		.replace(/hours?/g, "h")
		.replace(/minutes?/g, "m")
		.replace(/seconds?/g, "s");

	return formattedDuration;
};
