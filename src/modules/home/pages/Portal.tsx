import { useTranslation } from "react-i18next";
import { Navigation } from "~/core/components/Navigation";
import { Filter } from "./components/Filter";
import { Card } from "./components/Card";
import courseProjects from "~/shared/mock/courseProjects.json";
import { useState, useEffect } from "react";
import { CourseProject } from "~/shared/types/courseProject";
import LanguageSwitcher from "~/core/components/LanguageSwitcher";
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

	return (
		<div className="wrapper">
			<Navigation
				courseProjects={courseProjects}
				setFilteredProjects={setFilteredProjects}
			/>

			<LanguageSwitcher />

			<Filter
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
			/>

			<Card data={filteredProjects} />
		</div>
	);
};

export default Portal;
