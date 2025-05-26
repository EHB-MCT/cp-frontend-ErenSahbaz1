import { Navigation } from "~/core/components/Navigation";
import { Filter } from "./components/Filter";
import { Card } from "./components/Card";
import courseProjects from "~/shared/mock/courseProjects.json";
import { useState, useEffect } from "react";
import { CourseProject } from "~/shared/types/courseProject";
import { useTranslation } from "react-i18next";

const Portal = () => {
	const { i18n } = useTranslation(); // i18n instance for language switching

	const [activeLang, setActiveLang] = useState(i18n.language); // Current active language

	// Function to change language and update activeLang state
	function setLanguage(language: string) {
		i18n.changeLanguage(language);
		setActiveLang(language);
	}

	const [selectedGenre, setSelectedGenre] = useState<string>(""); // Currently selected genre for filtering
	const [filteredProjects, setFilteredProjects] =
		useState<CourseProject[]>(courseProjects); // Filtered list of projects

	// Update filteredProjects when selectedGenre changes
	useEffect(() => {
		let filtered = courseProjects;

		// If a genre is selected, filter projects by genre
		if (selectedGenre) {
			filtered = filtered.filter((project) => project.genre === selectedGenre);
		}

		setFilteredProjects(filtered); // Update state with filtered projects
	}, [selectedGenre]);

	return (
		<div className="wrapper">
			{/* Navigation bar with search and project filtering */}
			<Navigation
				courseProjects={courseProjects}
				setFilteredProjects={setFilteredProjects}
			/>

			{/* Language switcher buttons */}
			<div className="flex gap-2 my-4">
				<button
					onClick={() => setLanguage("en")}
					className={`flex items-center gap-2 rounded-full py-2 px-5 text-xs font-semibold shadow-sm transition
    ${
			activeLang === "en"
				? "bg-zinc-800 text-white"
				: "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
		}`}
					aria-pressed={activeLang === "en"}
				>
					<span role="img" aria-label="English">
						🇬🇧
					</span>{" "}
					English
				</button>
				<button
					onClick={() => setLanguage("nl")}
					className={`flex items-center gap-2 rounded-full py-2 px-5 text-xs font-semibold shadow-sm transition
    ${
			activeLang === "nl"
				? "bg-zinc-800 text-white"
				: "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
		}`}
					aria-pressed={activeLang === "nl"}
				>
					<span role="img" aria-label="Nederlands">
						🇳🇱
					</span>{" "}
					Nederlands
				</button>
			</div>

			{/* Genre filter component */}
			<Filter
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
			/>

			{/* Card grid displaying filtered projects */}
			<Card data={filteredProjects} />
		</div>
	);
};

export default Portal;
