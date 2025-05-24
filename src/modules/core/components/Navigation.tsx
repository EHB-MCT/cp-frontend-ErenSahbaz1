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

export const Navigation: React.FC<NavigationProps> = ({
	courseProjects,
	setFilteredProjects,
}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

	useDebounce(
		() => {
			setDebouncedSearchTerm(searchTerm);
		},
		500,
		[searchTerm]
	);
	useEffect(() => {
		let filtered = courseProjects;

		if (debouncedSearchTerm) {
			filtered = filtered.filter((project) =>
				project.fairytale
					.toLowerCase()
					.includes(debouncedSearchTerm.toLowerCase())
			);
		}

		setFilteredProjects(filtered);
	}, [debouncedSearchTerm, courseProjects, setFilteredProjects]);

	return (
		<div className="flex items-center justify-between pt-6">
			<div className="flex items-center">
				<img src="./LOGO.svg" alt="" className="max-w-[80px]" />
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
			<div className="text-sm">
				<Link to="/cp-frontend-ErenSahbaz1/">{t(markers.explore)}</Link>
				<Link to="/cp-frontend-ErenSahbaz1/parallax" className="button-primary">
					{t(markers.tale)}
				</Link>
			</div>
		</div>
	);
};
