// Shared Types
export type MessageType = 'text' | 'audio' | 'image' | 'document' | 'video';

// Message Communication Interfaces
export interface IMessageCommunication {
  _id: string;
  userId: string;
  phoneNumber: string;
  messageType: MessageType;
  sentAt: Date;
  responseTime: number | null;
  resolved: boolean;
  escalatedToHumanSupport: boolean;
}

// Check-In Progress Interfaces
export interface ICheckInSteps {
  personalInfo: boolean;
  paymentConfirmation: boolean;
  documentUpload: boolean;
  finalConfirmation: boolean;
}

export interface ICheckInProgress {
  _id: string;
  userId: string;
  phoneNumber: string;
  bookingDetails: Record<string, any>;
  checkInSteps: ICheckInSteps;
  missingInformation: string[];
  completedAt: Date | null;
}

// FAQ Interaction Interfaces
export interface IFAQInteraction {
  _id?: string;
  question: string;
  category: string;
  frequency: number;
  lastAskedAt: Date;
}

// Dashboard Metrics Interfaces
export interface IMessageMetrics {
  totalMessages: number;
  averageResponseTime: number;
  resolutionRate: number;
  escalationRate: number;
}

export interface ICheckInMetrics {
  totalCheckIns: number;
  completedCheckInRate: number;
  checkInStepsBreakdown: {
    personalInfoCompleted?: number;
    paymentConfirmationCompleted?: number;
    documentUploadCompleted?: number;
  };
  topMissingInformation: Array<{
    _id: string;
    count: number;
  }>;
}

export interface IFAQMetrics {
  topFAQs: IFAQInteraction[];
  faqCategories: Array<{
    _id: string;
    totalQuestions: number;
  }>;
}

// Combined Dashboard Data Interface
export interface IDashboardData {
  messageCommunication: IMessageMetrics;
  checkInProgress: ICheckInMetrics;
  faqInsights: IFAQMetrics;
}

// WhatsApp User Interface
export interface IWhatsappUser {
  _id?: string;
  number: string;
  agreed: boolean;
  threadId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// API Response Interface
export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Enum for Dashboard Time Frames
export enum DashboardTimeFrame {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly'
}