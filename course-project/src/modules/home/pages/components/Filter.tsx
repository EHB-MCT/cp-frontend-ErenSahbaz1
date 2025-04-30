import React from "react";
import courseProjects from "~/shared/mock/courseProjects.json";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";

interface FilterProps {
	selectedGenre: string;
	setSelectedGenre: (genre: string) => void;
}

export const Filter: React.FC<FilterProps> = ({
	selectedGenre,
	setSelectedGenre,
}) => {
	// Extract unique genres from the JSON data
	const genres = Array.from(
		new Set(courseProjects.map((project) => project.genre))
	);

	// Handle genre change
	const handleChange = (event: SelectChangeEvent<string>) => {
		setSelectedGenre(event.target.value);
	};

	return (
		<div>
			<FormControl className="w-[100px] pt-0">
				<InputLabel id="genre-select-label">Genre</InputLabel>
				<Select
					labelId="genre-select-label"
					id="genre-select"
					value={selectedGenre}
					label="Genre"
					onChange={handleChange}
				>
					{/* "All" option */}
					<MenuItem value="">All</MenuItem>

					{/* Genre options */}
					{genres.map((genre) => (
						<MenuItem key={genre} value={genre}>
							{genre}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
