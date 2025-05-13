import { useTranslation } from "react-i18next";
import { Navigation } from "~/core/components/Navigation";
import { Filter } from "./components/Filter";
import { Card } from "./components/Card";
import courseProjects from "~/shared/mock/courseProjects.json";
import { useState, useEffect } from "react";

interface CourseProject {
	fable_title: string;
	genre: string;
}

const Portal = () => {
	const { i18n } = useTranslation();

	const [selectedGenre, setSelectedGenre] = useState<string>("");
	const [filteredProjects, setFilteredProjects] =
		useState<CourseProject[]>(courseProjects);

	useEffect(() => {
		let filtered = courseProjects;

		if (selectedGenre) {
			filtered = filtered.filter((project) => project.genre === selectedGenre);
		}

		setFilteredProjects(filtered);
	}, [selectedGenre]);

	function setLanguage(language: string) {
		i18n.changeLanguage(language);
	}

	return (
		<div className="wrapper">
			<Navigation
				courseProjects={courseProjects}
				setFilteredProjects={setFilteredProjects}
			/>

			<button
				onClick={() => setLanguage("en")}
				className="bg-emerald-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold"
			>
				English
			</button>
			<button
				onClick={() => setLanguage("nl")}
				className="bg-emerald-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold ml-2"
			>
				Nederlands
			</button>

			<Filter
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
			/>

			<Card data={filteredProjects} />
		</div>
	);
};

export default Portal;
