import React from "react";
import courseProjects from "~/shared/mock/courseProjects.json";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";
import { t } from "i18next";

// Props for the Filter component
interface FilterProps {
	selectedGenre: string; // Currently selected genre
	setSelectedGenre: (genre: string) => void; // Function to update selected genre
}

// Genre filter dropdown component
export const Filter: React.FC<FilterProps> = ({
	selectedGenre,
	setSelectedGenre,
}) => {
	// Extract unique genres from the course projects list
	const genres = Array.from(
		new Set(courseProjects.map((project) => project.genre))
	);

	// Handle dropdown value change
	const handleChange = (event: SelectChangeEvent<string>) => {
		setSelectedGenre(event.target.value);
	};

	return (
		// Container for the filter dropdown
		<div className="my-10 bg-zinc-100 flex items-center justify-center rounded-xl">
			<FormControl className="w-[100px] bg-white" sx={{ marginY: "10px" }}>
				{/* Dropdown label */}
				<InputLabel id="genre-select-label">{t("genreLabel")}</InputLabel>
				<Select
					labelId="genre-select-label"
					id="genre-select"
					value={selectedGenre}
					label={t("genreLabel")}
					onChange={handleChange}
				>
					{/* Option to show all genres */}
					<MenuItem value="">{t("all")}</MenuItem>

					{/* Render a menu item for each unique genre */}
					{genres.map((genre) => (
						<MenuItem key={genre} value={genre}>
							{t(`genre.${genre.toLowerCase()}`)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
