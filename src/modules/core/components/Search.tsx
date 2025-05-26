import React from "react";
import { FaSearch } from "react-icons/fa";
import { t } from "i18next";

// Props for the Search component
interface SearchProps {
	searchTerm: string; // Current search input value
	setSearchTerm: (value: string) => void; // Function to update the search input
}

// Search input component with icon
export const Search: React.FC<SearchProps> = ({
	searchTerm,
	setSearchTerm,
}) => {
	return (
		<div className="search">
			{/* Container for icon and input */}
			<div>
				<FaSearch /> {/* Search icon */}
				<input
					type="text"
					placeholder={t("search")} // Localized placeholder text
					value={searchTerm} // Controlled input value
					onChange={(e) => setSearchTerm(e.target.value)} // Update value on change
				/>
			</div>
		</div>
	);
};
