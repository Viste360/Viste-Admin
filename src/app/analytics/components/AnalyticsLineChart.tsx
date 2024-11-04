import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ChartOptions,
} from "chart.js";
import { prepareChartData } from "@/utils/chartDataUtils";
import { MonthlyDataItem } from "@/types/analytics.type";

interface AnalyticsLineChartProps {
	data: MonthlyDataItem[];
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AnalyticsLineChart: React.FC<AnalyticsLineChartProps> = ({ data }) => {
	const chartData = prepareChartData(data);

	const options: ChartOptions<"line"> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				mode: "index",
				intersect: false,
				backgroundColor: "white",
				titleColor: "#334155",
				bodyColor: "#334155",
				borderColor: "#E2E8F0",
				borderWidth: 1,
				padding: 12,
				titleFont: {
					size: 14,
					weight: "bold",
					family: "Inter",
				},
				bodyFont: {
					size: 13,
					family: "Inter",
				},
				displayColors: false,
				callbacks: {
					title(tooltipItems) {
						return `${tooltipItems[0].label}`;
					},
					label(context) {
						return `${
							context.dataset.label
						}: ${context.parsed.y.toLocaleString()} users`;
					},
				},
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
				border: {
					display: false,
				},
				ticks: {
					font: {
						size: 12,
						family: "Inter",
					},
					color: "#94A3B8",
					padding: 8,
				},
				title: {
					display: true,
					text: "Month",
					color: "#64748B",
					font: {
						size: 14,
						family: "Inter",
					},
					padding: { top: 16 },
				},
			},
			y: {
				beginAtZero: true,
				border: {
					display: false,
				},
				grid: {
					color: "#E2E8F0",
				},
				ticks: {
					font: {
						size: 12,
						family: "Inter",
					},
					color: "#94A3B8",
					padding: 8,
					maxTicksLimit: 6,
					callback: (value) => value.toLocaleString(),
				},
				title: {
					display: true,
					text: "Active Users",
					color: "#64748B",
					font: {
						size: 14,
						family: "Inter",
					},
					padding: { bottom: 16 },
				},
			},
		},
		interaction: {
			intersect: false,
			mode: "index",
		},
	};

	return (
		<div className="h-[400px] w-full">
			<Line data={chartData} options={options} className="w-full h-full" />
		</div>
	);
};

export default AnalyticsLineChart;
