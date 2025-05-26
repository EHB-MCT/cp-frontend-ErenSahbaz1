import { useState, useEffect } from "react";
import { Search } from "~/core/components/Search";
import { markers } from "../i18n/markers";
import { t } from "i18next";
import { Link } from "react-router";
import { CourseProject } from "~/shared/types/courseProject";
import { useDebounce } from "react-use";

interface NavigationProps {
	courseProjects: CourseProject[];
	setFilteredProjects: (projects: CourseProject[]) => void;
}

// Navigation component for the app header
export const Navigation: React.FC<NavigationProps> = ({
	courseProjects,
	setFilteredProjects,
}) => {
	const [searchTerm, setSearchTerm] = useState(""); // User's current search input
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); // Debounced search input

	// Debounce the search term to avoid filtering on every keystroke
	useDebounce(
		() => {
			setDebouncedSearchTerm(searchTerm); // Update debounced value after 500ms of inactivity
		},
		500,
		[searchTerm]
	);

	// Filter projects whenever the debounced search term or project list changes
	useEffect(() => {
		let filtered = courseProjects;

		// If there's a search term, filter by fairytale name (case-insensitive)
		if (debouncedSearchTerm) {
			filtered = filtered.filter((project) =>
				project.fairytale
					.toLowerCase()
					.includes(debouncedSearchTerm.toLowerCase())
			);
		}

		setFilteredProjects(filtered); // Update the filtered projects in parent state
	}, [debouncedSearchTerm, courseProjects, setFilteredProjects]);

	return (
		<div className="flex items-center justify-between pt-6">
			{/* Logo and search bar */}
			<div className="flex items-center">
				<img src="./LOGO.svg" alt="" className="max-w-[80px]" />
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
			{/* Navigation links */}
			<div className="text-sm">
				<Link to="/cp-frontend-ErenSahbaz1/making-of/eren-sahbaz-keloglan">
					Making Of
				</Link>
				<Link to="/cp-frontend-ErenSahbaz1/">{t(markers.explore)}</Link>
				<Link to="/cp-frontend-ErenSahbaz1/parallax" className="button-primary">
					{t(markers.tale)}
				</Link>
			</div>
		</div>
	);
};
