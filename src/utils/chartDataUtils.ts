import { MonthlyDataItem } from "@/types/analytics.type";
import { ChartData } from "chart.js";

const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const prepareChartData = (data: MonthlyDataItem[]): ChartData<"line"> => {
	const labels = monthNames;

	const deviceCategories = ["desktop", "mobile", "tablet"] as const;
	const colors = {
		desktop: "#FF6B6B",
		mobile: "#FFB4B4",
		tablet: "#FFD4D4",
	};

	const datasets = deviceCategories.map((category) => {
		const categoryData = Array.from({ length: 12 }, (_, monthIndex) => {
			const monthStr = (monthIndex + 1).toString();
			const monthData = data.find(
				(item) => item.month === monthStr && item.deviceCategory === category
			);
			return monthData?.activeUsers ?? 0;
		});

		return {
			label: category.charAt(0).toUpperCase() + category.slice(1),
			data: categoryData,
			borderColor: colors[category],
			backgroundColor: `${colors[category]}15`,
			fill: true,
			tension: 0.4,
			borderWidth: 2,
			pointRadius: 0,
			pointHoverRadius: 4,
			pointHoverBackgroundColor: colors[category],
			pointHoverBorderColor: "white",
			pointHoverBorderWidth: 2,
		};
	});

	return { labels, datasets };
};
