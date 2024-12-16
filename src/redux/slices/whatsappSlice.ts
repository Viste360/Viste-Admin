import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import {
	IDashboardData,
	IMessageMetrics,
	ICheckInMetrics,
	IFAQMetrics,
} from "@/types/whatsapp.type";
import { getWhatsappData } from "../actions/whatsappAction";

type WhatsappState = {
	isLoading: boolean;
	messageCommunication: IMessageMetrics | null;
	checkInProgress: ICheckInMetrics | null;
	faqInsights: IFAQMetrics | null;
};

const initialState: WhatsappState = {
	isLoading: true,
	messageCommunication: null,
	checkInProgress: null,
	faqInsights: null,
};

// const initialState: WhatsappState = {
// 	isLoading: true,
// 	messageCommunication: {
// 		totalMessages: 434,
// 		averageResponseTime: 4832,
// 		resolutionRate: 62,
// 		escalationRate: 3.5,
// 	},
// 	checkInProgress: {
// 		totalCheckIns: 442,
// 		completedCheckInRate: 53,
// 		checkInStepsBreakdown: {
// 			personalInfoCompleted: 12,
// 			paymentConfirmationCompleted: 11,
// 			documentUploadCompleted: 5,
// 		},
// 		topMissingInformation: [
// 			{
// 				_id: "2424jqwekjr2355jl423",
// 				count: 3,
// 			},
// 			{
// 				_id: "2424jqwekjr235afsdjl423",
// 				count: 1,
// 			},
// 			{
// 				_id: "2424jqwekjr23sfaa5jl423",
// 				count: 1,
// 			},
// 		],
// 	},
// 	faqInsights: {
// 		topFAQs: [
// 			{
// 				_id: "askljsaw432ssaf",
// 				question: "How can I get a cup of coffee?",
// 				category: "Basic",
// 				frequency: 21,
// 				lastAskedAt: new Date(),
// 			},
// 			{
// 				_id: "askljsaw432ssafafadsf",
// 				question: "How can I lock door?",
// 				category: "Moderate",
// 				frequency: 11,
// 				lastAskedAt: new Date(),
// 			},
// 			{
// 				_id: "askljsaw4asfaae3saf",
// 				question: "How can I make coffe?",
// 				category: "Advanced",
// 				frequency: 13,
// 				lastAskedAt: new Date(),
// 			},
// 		],
// 		faqCategories: [
// 			{
// 				_id: "4242masdkjk234jk32",
// 				totalQuestions: 12,
// 			},
// 			{
// 				_id: "4242masdkjkasf4jk32",
// 				totalQuestions: 7,
// 			},
// 			{
// 				_id: "4242masdkjk234jkfs2",
// 				totalQuestions: 10,
// 			},
// 		],
// 	},
// };

export const whatsappSlice = createSlice({
	name: "whatsapp",
	initialState,
	reducers: {},
	extraReducers: (builders) => {
		// get google analytics
		builders.addCase(getWhatsappData.pending, (state) => {
			state.isLoading = true;
		});
		builders.addCase(
			getWhatsappData.fulfilled,
			(state, action: PayloadAction<IDashboardData>) => {
				state.isLoading = false;
				state.messageCommunication = action.payload.messageCommunication;
				state.checkInProgress = action.payload.checkInProgress;
				state.faqInsights = action.payload.faqInsights;
			}
		);
		builders.addCase(getWhatsappData.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export const {} = whatsappSlice.actions;

export default whatsappSlice.reducer;
