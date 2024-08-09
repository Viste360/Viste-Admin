export interface User {
	_id: string;
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

export type SignUpUser = {
	name: string;
	email: string;
	password: string;
};

export type LoginUser = {
	email: string;
	password: string;
};

export type ResetPassword = {
	password: string;
	confirmPassword: string;
};
