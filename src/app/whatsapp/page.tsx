"use client";

import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
} from "recharts";
import { Activity, MessageCircle, HelpCircle, CheckCircle, Timer } from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthGuard from "@/components/hoc/AuthGuard";
import { sendGAEvent } from "@next/third-parties/google";
import DashboardHeader from "@/components/DashboardHeader";
import UtilsBar from "@/components/UtilsBar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getWhatsappData } from "@/redux/actions/whatsappAction";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const WhatsappManager = () => {
	const { isLoading, messageCommunication, checkInProgress, faqInsights } = useAppSelector(
		(state) => state.whatsappState
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		sendGAEvent("event", "pageview", { value: "WhatsappManager" });
		dispatch(getWhatsappData());
	}, [dispatch]);

	const exportCSV = () => {
		console.log("Export CSV");
	};

	const searchHandler = () => {
		console.log("Search whatsapp");
	};

	const renderMetricCard = (
		title: string,
		value: number | string,
		icon: React.ReactNode,
		variant: "default" | "secondary" | "outline" = "default"
	) => (
		<Card className="hover:shadow-lg transition-all duration-300 border-black-4/35">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
				{icon}
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">
					{isLoading ? (
						<Skeleton className="h-8 w-full" />
					) : (
						<Badge variant={variant}>{value}</Badge>
					)}
				</div>
			</CardContent>
		</Card>
	);

	const faqCategoriesData =
		faqInsights?.faqCategories?.map((category) => ({
			name: category._id,
			value: category.totalQuestions,
		})) || [];

	const checkInStepsData = [
		{
			name: "Personal Info",
			value: checkInProgress?.checkInStepsBreakdown?.personalInfoCompleted || 0,
		},
		{
			name: "Payment",
			value: checkInProgress?.checkInStepsBreakdown?.paymentConfirmationCompleted || 0,
		},
		{
			name: "Document",
			value: checkInProgress?.checkInStepsBreakdown?.documentUploadCompleted || 0,
		},
	];

	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	return (
		<DashboardLayout>
			<div className="flex flex-col gap-5">
				<DashboardHeader
					title="WhatsApp Manager"
					subTitle="Comprehensive communication and check-in insights"
					exp={true}
					expType="CSV"
					expCallback={exportCSV}
				/>
				<UtilsBar onSearch={searchHandler} />

				{/* Metrics Grid */}
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{renderMetricCard(
						"Total Messages",
						messageCommunication?.totalMessages || 0,
						<MessageCircle className="h-4 w-4 text-muted-foreground" />
					)}
					{renderMetricCard(
						"Average Response Time",
						`${messageCommunication?.averageResponseTime || 0}ms`,
						<Timer className="h-4 w-4 text-muted-foreground" />,
						"secondary"
					)}
					{renderMetricCard(
						"Resolution Rate",
						`${messageCommunication?.resolutionRate || 0}%`,
						<CheckCircle className="h-4 w-4 text-muted-foreground" />,
						"secondary"
					)}
					{renderMetricCard(
						"Escalation Rate",
						`${messageCommunication?.escalationRate || 0}%`,
						<Activity className="h-4 w-4 text-muted-foreground" />,
						"outline"
					)}
					{/* {renderMetricCard(
						"Top FAQs",
						faqInsights?.topFAQs?.length || 0,
						<HelpCircle className="h-4 w-4 text-muted-foreground" />
					)} */}
				</div>

				{/* Charts Section
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
					<Card className="border-black-4/35">
						<CardHeader>
							<CardTitle>FAQ Categories</CardTitle>
						</CardHeader>
						<CardContent className="h-[300px]">
							<ResponsiveContainer width="100%" height="100%">
								<PieChart>
									<Pie
										data={faqCategoriesData}
										cx="50%"
										cy="50%"
										labelLine={false}
										outerRadius={80}
										fill="#8884d8"
										dataKey="value"
									>
										{faqCategoriesData.map((entry, index) => (
											<Cell
												key={`cell-${index}`}
												fill={COLORS[index % COLORS.length]}
											/>
										))}
									</Pie>
									<Tooltip />
								</PieChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>

					<Card className="border-black-4/35">
						<CardHeader>
							<CardTitle>Check-in Steps Completion</CardTitle>
						</CardHeader>
						<CardContent className="h-[300px]">
							<ResponsiveContainer width="100%" height="100%">
								<BarChart data={checkInStepsData}>
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Bar dataKey="value" fill="#EC5633" />
								</BarChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>
				</div> */}
			</div>
		</DashboardLayout>
	);
};

export default AuthGuard(WhatsappManager);
