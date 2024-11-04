export interface ReportData {
	totalVisitors: number;
	totalPageViews: number;
	totalSessionDuration: number;
	bounceRate: number;
}

export type MonthlyDataItem = {
	month: string;
	deviceCategory: "desktop" | "mobile" | "tablet";
	activeUsers: number;
};

export type GoogleAnalyticsData = {
	reportData: ReportData;
	monthlyData: MonthlyDataItem[];
};
