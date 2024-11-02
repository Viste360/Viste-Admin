"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/components/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useCallback, useEffect, useMemo } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import UtilsBar from "@/components/UtilsBar";
import Image from "next/image";
import numeral from "numeral";
import humanizeDuration from "humanize-duration";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getGoogleAnalyticsData } from "@/redux/actions/analyticsAction";

const Analytics = () => {
	const { isLoading, reportData } = useAppSelector((state) => state.analyticsState);
	const dispatch = useAppDispatch();

	useEffect(() => {
		sendGAEvent("event", "pageview", { value: "Analytics" });
		dispatch(getGoogleAnalyticsData());
	}, []);

	const formatNumber = useCallback((num: number) => numeral(num).format("0.[0]a"), []);

	const formatDuration = useCallback((seconds: number) => {
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
	}, []);

	const formattedDuration = useMemo(() => {
		if (reportData && reportData.totalSessionDuration) {
			return formatDuration(reportData.totalSessionDuration);
		}
		return null;
	}, [reportData, formatDuration]);

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
				<div className="flex justify-between items-start py-6 border-b border-wmr-6">
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
						<h2>
							{!isLoading && reportData && formatNumber(reportData.totalVisitors)}
						</h2>
					</div>
					<div className="flex flex-col items-start justify-center p-2 sm:p-4">
						<h6 className="text-black-4 font-medium">Page Views</h6>
						<h2>
							{!isLoading && reportData && formatNumber(reportData.totalPageViews)}
						</h2>
					</div>
					<div className="flex flex-col items-start justify-center p-4">
						<h6 className="text-black-4 font-medium">Session Duration</h6>
						<h2>{formattedDuration}</h2>
					</div>
					<div className="flex flex-col items-start justify-center p-4">
						<h6 className="text-black-4 font-medium">Bounce Rate</h6>
						<h2>
							{!isLoading &&
								reportData &&
								(reportData.bounceRate * 100).toFixed(1) + "%"}
						</h2>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default AuthGuard(Analytics);
