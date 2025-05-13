import React from "react";
import { FaSearch } from "react-icons/fa";
import { t } from "i18next";

interface SearchProps {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({
	searchTerm,
	setSearchTerm,
}) => {
	return (
		<div className="search">
			<div>
				<FaSearch />
				<input
					type="text"
					placeholder={t("search")}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
		</div>
	);
};
