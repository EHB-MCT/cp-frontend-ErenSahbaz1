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

interface FilterProps {
	selectedGenre: string;
	setSelectedGenre: (genre: string) => void;
}

export const Filter: React.FC<FilterProps> = ({
	selectedGenre,
	setSelectedGenre,
}) => {
	const genres = Array.from(
		new Set(courseProjects.map((project) => project.genre))
	);

	const handleChange = (event: SelectChangeEvent<string>) => {
		setSelectedGenre(event.target.value);
	};

	return (
		<div className="my-10 bg-[#EBF5EC] flex items-center justify-center rounded-xl">
			<FormControl className="w-[100px] bg-white" sx={{ marginY: "10px" }}>
				<InputLabel id="genre-select-label">{t("genreLabel")}</InputLabel>
				<Select
					labelId="genre-select-label"
					id="genre-select"
					value={selectedGenre}
					label={t("genreLabel")}
					onChange={handleChange}
				>
					<MenuItem value="">{t("all")}</MenuItem>

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
