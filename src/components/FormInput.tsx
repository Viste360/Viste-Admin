"use client";

import { FormikHandlers } from "formik";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface FormInputProps {
	name: string;
	label: string;
	type: string;
	value: string;
	placeholder: string;
	disabled: boolean;
	isError: boolean;
	error: string | undefined;
	handleChange: FormikHandlers["handleChange"];
	handleBlur: FormikHandlers["handleBlur"];
}

const FormInput: React.FC<FormInputProps> = ({
	name,
	label,
	type = "text",
	isError,
	placeholder,
	disabled,
	value,
	error,
	handleChange,
	handleBlur,
}) => {
	return (
		<div className="flex flex-col space-y-1">
			<Label htmlFor={name} className={" text-white-1 lg:text-black-3"}>
				{label}
			</Label>
			<Input
				name={name}
				id={name}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				onBlur={handleBlur}
				onChange={handleChange}
				value={value}
				autoComplete="on"
			/>
			<div className="text-xs text-white-2 lg:text-red-3 min-h-4">{isError ? error : ""}</div>
		</div>
	);
};

export default FormInput;
