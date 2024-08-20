import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import SearchInput from "./SearchInput";

interface UtilsBarProps {
	onSearch: (keyword: string) => void;
}

const UtilsBar: React.FC<UtilsBarProps> = ({ onSearch }) => {
	const [searchKeyword, setSearchKeyword] = useState<string>("");

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchKeyword(event.target.value);
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === "Enter") {
			onSearch(searchKeyword);
			setSearchKeyword("");
		}
	};

	return (
		<div className="flex justify-between items-center mx-4">
			<SearchInput
				value={searchKeyword}
				placeholder="Search"
				onKeyDown={handleKeyDown}
				onChange={onChangeHandler}
				icon="/images/SearchBlack.png"
				className="w-72 focus-visible:border-black-4 border-black-5 rounded-lg placeholder:text-black-4"
			/>
			<div>Filter Bar</div>
		</div>
	);
};

export default UtilsBar;
