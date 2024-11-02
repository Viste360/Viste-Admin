"use client";

import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import UnAuthGuard from "@/components/hoc/UnAuthGuard";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyEmailAction } from "@/redux/actions/userAction";
import { useParams, useRouter } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

const VerifyEmail = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { token } = useParams<{ token: string }>();
	const { formSubmitting: verifying, formSubmitted: verified } = useAppSelector(
		(state) => state.userState
	);

	useEffect(() => {
		dispatch(verifyEmailAction(token));

		sendGAEvent("event", "pageview", { value: "Verify Password" });
	}, []);

	return (
		<AuthLayout>
			<main className="flex items-center justify-center h-screen flex-1 lg:flex-none">
				<div className="flex flex-col items-center w-full gap-6">
					{verifying ? (
						<h2 className="text-white-1 lg:text-black-1 ">Verifying Email...</h2>
					) : (
						<>
							<h2
								className={
									verified ? "text-green-2" : "text-white-1 lg:text-red-3 "
								}
							>
								{verified ? "Email Verified" : "Verification Failed"}
							</h2>
							<Button
								onClick={() => router.push("/login")}
								variant="customSubmit"
								type="submit"
								size="lg"
							>
								Get back to Login page
							</Button>
						</>
					)}
				</div>
			</main>
		</AuthLayout>
	);
};

export default UnAuthGuard(VerifyEmail);
