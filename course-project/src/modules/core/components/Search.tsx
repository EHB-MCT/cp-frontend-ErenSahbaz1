import React from "react";
import { FaSearch } from "react-icons/fa";

export const Search = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="search">
			<div>
				<FaSearch />

				<input
					type="text"
					placeholder="Search by Websites"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
		</div>
	);
};
