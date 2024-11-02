"use client";

import FormInput from "@/components/FormInput";
import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import UnAuthGuard from "@/components/hoc/UnAuthGuard";
import React, { useEffect } from "react";
import validationSchema from "./validationSchema";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginAction } from "@/redux/actions/userAction";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { sendGAEvent } from "@next/third-parties/google";

const Login = () => {
	const dispatch = useAppDispatch();
	const { formSubmitting, formSubmitted } = useAppSelector((state) => state.userState);
	const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema,
			onSubmit: (values) => {
				dispatch(loginAction(values));
			},
		});

	useEffect(() => {
		sendGAEvent("event", "pageview", { value: "Login" });
	}, []);

	useEffect(() => {
		if (formSubmitted) {
			resetForm();
		}
	}, [formSubmitted]);

	return (
		<AuthLayout>
			<main className="flex items-center justify-center h-screen flex-1 lg:flex-none">
				<div className="flex flex-col items-center w-full">
					<form
						onSubmit={handleSubmit}
						className=" flex flex-col justify-center w-10/12 sm:w-1/2 lg:w-8/12 xl:w-1/2 2xl:w-1/3 gap-2"
					>
						<h2 className="font-semibold text-white-1 lg:text-black-1 text-center lg:text-start">
							Welcome back
						</h2>
						<h6 className="lg:text-black-4 text-white-4 text-center lg:text-start mb-6 mt-2">
							Welcome back! Please enter your details.
						</h6>
						<FormInput
							type="email"
							placeholder="Enter your email"
							label="Email"
							value={values.email}
							name="email"
							error={errors.email}
							isError={!!touched.email && !!errors.email}
							handleBlur={handleBlur}
							handleChange={handleChange}
							disabled={formSubmitting}
						/>
						<FormInput
							type="password"
							placeholder="Enter your password"
							label="Password"
							value={values.password}
							name="password"
							error={errors.password}
							isError={!!touched.password && !!errors.password}
							handleBlur={handleBlur}
							handleChange={handleChange}
							disabled={formSubmitting}
						/>
						<div className="flex justify-between items-center">
							<div className="flex items-center space-x-2">
								<Checkbox id="remember" />
								<Label className="text-white-4 lg:text-black-3" htmlFor="remember">
									Remember for 30 days
								</Label>
							</div>
							<Link
								className="lg:text-red-3 text-white-1 text-sm"
								href={"/password/forgot"}
							>
								Forgot password
							</Link>
						</div>
						<Button className="mt-6" variant="customSubmit" type="submit" size="full">
							{formSubmitting ? <Spinner size="small" /> : "Sign in"}
						</Button>
						<div className="flex justify-center items-center gap-1 text-white-4 lg:text-black-4 mt-2">
							<p>Don&apos;t have an account?</p>
							<Link className="lg:text-red-3 text-white-2 text-sm" href={"/signup"}>
								Sign Up
							</Link>
						</div>
					</form>
				</div>
			</main>
		</AuthLayout>
	);
};

export default UnAuthGuard(Login);
