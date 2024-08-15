"use client";

import React, { ChangeEvent, KeyboardEvent } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SearchInputProps {
	value: string;
	placeholder: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
	className?: string;
	icon: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
	placeholder,
	value,
	onChange,
	onKeyDown,
	className,
	icon,
}) => {
	return (
		<div className="flex flex-col space-y-1">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<Image
						src={icon}
						alt="search"
						width={16}
						height={16}
						className="object-contain"
					/>
				</div>
				<Input
					type="search"
					placeholder={placeholder}
					onChange={onChange}
					onKeyDown={onKeyDown}
					value={value}
					autoComplete="on"
					className={cn(
						"border-red-5 h-11 placeholder:text-white-1 placeholder:text-base placeholder:font-normal pl-9 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-red-5",
						className
					)}
				/>
			</div>
		</div>
	);
};

export default SearchInput;
