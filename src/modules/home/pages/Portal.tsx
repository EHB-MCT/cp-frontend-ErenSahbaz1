import { useTranslation } from "react-i18next";
import { Navigation } from "~/core/components/Navigation";
import { Filter } from "./components/Filter";
import { Card } from "./components/Card";
import courseProjects from "~/shared/mock/courseProjects.json";
import { useState, useEffect } from "react";
import { CourseProject } from "~/shared/types/courseProject";

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

	const [activeLang, setActiveLang] = useState(i18n.language);

	function setLanguage(language: string) {
		i18n.changeLanguage(language);
		setActiveLang(language);
	}

	return (
		<div className="wrapper">
			<Navigation
				courseProjects={courseProjects}
				setFilteredProjects={setFilteredProjects}
			/>

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

			<Filter
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
			/>

			<Card data={filteredProjects} />
		</div>
	);
};

export default Portal;
