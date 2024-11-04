"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/components/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect, useMemo } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import UtilsBar from "@/components/UtilsBar";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getGoogleAnalyticsData } from "@/redux/actions/analyticsAction";
import AnalyticsLineChart from "./components/AnalyticsLineChart";
import { MonthlyDataItem } from "@/types/analytics.type";
import { formatBounceRate, formatDuration, formatNumber } from "@/utils/formatAnalyticsData";

const Analytics = () => {
	const { isLoading, reportData, monthlyData } = useAppSelector((state) => state.analyticsState);
	const dispatch = useAppDispatch();

	const formattedDuration = useMemo(() => {
		if (reportData && reportData.totalSessionDuration) {
			return formatDuration(reportData.totalSessionDuration);
		}
		return null;
	}, [reportData, formatDuration]);

	const formattedTotalVisitors = useMemo(() => {
		if (reportData && reportData.totalVisitors) {
			return formatNumber(reportData.totalVisitors);
		}
		return null;
	}, [reportData, formatNumber]);

	const formattedTotalPageViews = useMemo(() => {
		if (reportData && reportData.totalPageViews) {
			return formatNumber(reportData.totalPageViews);
		}
		return null;
	}, [reportData, formatNumber]);

	const formattedBounceRate = useMemo(() => {
		if (reportData && reportData.bounceRate) {
			return formatBounceRate(reportData.bounceRate);
		}
		return null;
	}, [reportData, formatBounceRate]);

	// const data: MonthlyDataItem[] = [
	// 	{ month: "1", deviceCategory: "desktop", activeUsers: 6356 },
	// 	{ month: "1", deviceCategory: "mobile", activeUsers: 5433 },
	// 	{ month: "1", deviceCategory: "tablet", activeUsers: 4833 },
	// 	{ month: "2", deviceCategory: "desktop", activeUsers: 9334 },
	// 	{ month: "2", deviceCategory: "mobile", activeUsers: 8739 },
	// 	{ month: "2", deviceCategory: "tablet", activeUsers: 7678 },
	// 	{ month: "3", deviceCategory: "desktop", activeUsers: 8675 },
	// 	{ month: "3", deviceCategory: "mobile", activeUsers: 7542 },
	// 	{ month: "3", deviceCategory: "tablet", activeUsers: 6433 },
	// 	{ month: "4", deviceCategory: "desktop", activeUsers: 6543 },
	// 	{ month: "4", deviceCategory: "mobile", activeUsers: 5333 },
	// 	{ month: "4", deviceCategory: "tablet", activeUsers: 4345 },
	// 	{ month: "5", deviceCategory: "desktop", activeUsers: 9335 },
	// 	{ month: "5", deviceCategory: "mobile", activeUsers: 8336 },
	// 	{ month: "5", deviceCategory: "tablet", activeUsers: 7030 },
	// 	{ month: "6", deviceCategory: "desktop", activeUsers: 7398 },
	// 	{ month: "6", deviceCategory: "mobile", activeUsers: 6636 },
	// 	{ month: "6", deviceCategory: "tablet", activeUsers: 5765 },
	// 	{ month: "7", deviceCategory: "desktop", activeUsers: 6385 },
	// 	{ month: "7", deviceCategory: "mobile", activeUsers: 5564 },
	// 	{ month: "7", deviceCategory: "tablet", activeUsers: 5334 },
	// 	{ month: "8", deviceCategory: "desktop", activeUsers: 7313 },
	// 	{ month: "8", deviceCategory: "mobile", activeUsers: 6532 },
	// 	{ month: "8", deviceCategory: "tablet", activeUsers: 6221 },
	// 	{ month: "9", deviceCategory: "desktop", activeUsers: 7345 },
	// 	{ month: "9", deviceCategory: "mobile", activeUsers: 6453 },
	// 	{ month: "9", deviceCategory: "tablet", activeUsers: 5313 },
	// 	{ month: "10", deviceCategory: "desktop", activeUsers: 9132 },
	// 	{ month: "10", deviceCategory: "mobile", activeUsers: 8334 },
	// 	{ month: "10", deviceCategory: "tablet", activeUsers: 7243 },
	// 	{ month: "11", deviceCategory: "desktop", activeUsers: 8343 },
	// 	{ month: "11", deviceCategory: "mobile", activeUsers: 7333 },
	// 	{ month: "11", deviceCategory: "tablet", activeUsers: 6434 },
	// ];

	useEffect(() => {
		sendGAEvent("event", "pageview", { value: "Analytics" });
		dispatch(getGoogleAnalyticsData());
	}, []);

	const exportCSV = () => {
		console.log("Export CSV");
	};

	const searchHandler = () => {
		console.log("Search analytics");
	};

	return (
		<DashboardLayout>
			<div className="flex flex-col gap-5">
				<DashboardHeader
					title="Analytics"
					subTitle="Tagline will go here"
					exp={true}
					expType="CSV"
					expCallback={exportCSV}
				/>
				<UtilsBar onSearch={searchHandler} />
				<div className="flex justify-between items-start py-6 border-b border-white-3">
					<h3 className="text-lg">Overview</h3>

					<Image
						className="cursor-pointer"
						alt="Dropdown"
						src="/images/Dropdown.png"
						width={20}
						height={20}
					/>
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
					<div className="flex flex-col items-start justify-center p-4">
						<h6 className="text-black-4 font-medium">Total Visitors</h6>
						<h2>{formattedTotalVisitors}</h2>
					</div>
					<div className="flex flex-col items-start justify-center p-2 sm:p-4">
						<h6 className="text-black-4 font-medium">Page Views</h6>
						<h2>{formattedTotalPageViews}</h2>
					</div>
					<div className="flex flex-col items-start justify-center p-4">
						<h6 className="text-black-4 font-medium">Session Duration</h6>
						<h2>{formattedDuration}</h2>
					</div>
					<div className="flex flex-col items-start justify-center p-4">
						<h6 className="text-black-4 font-medium">Bounce Rate</h6>
						<h2>{formattedBounceRate}</h2>
					</div>
				</div>
				<div>{!isLoading && <AnalyticsLineChart data={monthlyData} />}</div>
			</div>
		</DashboardLayout>
	);
};

export default AuthGuard(Analytics);
