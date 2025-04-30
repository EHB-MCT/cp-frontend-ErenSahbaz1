import { useTranslation } from "react-i18next";
import { Navigation } from "~/core/components/Navigation";
import { Filter } from "./components/Filter";
import { Card } from "./components/Card";
import courseProjects from "~/shared/mock/courseProjects.json";
import React, { useState } from "react";

const Portal = () => {
	const { i18n } = useTranslation();

	// State to track the selected genre
	const [selectedGenre, setSelectedGenre] = useState<string>("");

	// Filter the course projects based on the selected genre
	const filteredProjects = selectedGenre
		? courseProjects.filter((project) => project.genre === selectedGenre)
		: courseProjects;

	// Function to change language
	function setLanguage(language: string) {
		i18n.changeLanguage(language);
	}

	return (
		<div className="wrapper">
			<Navigation />

			{/* Language Buttons */}
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

			{/* Filter Component */}
			<Filter
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
			/>

			{/* Card Component */}
			<Card data={filteredProjects} />
		</div>
	);
};

export default Portal;
