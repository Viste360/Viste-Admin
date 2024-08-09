export interface User {
	name: string;
	email: string;
	image?: string;
	approve: boolean;
	verified: boolean;
	resetPasswordToken: string;
	resetPasswordExpire: Date;
	verifyEmailToken: string;
	verifyEmailExpire: Date;
	createdAt: Date;
	updatedAt: Date;
}
