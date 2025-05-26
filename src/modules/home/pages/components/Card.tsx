import { CardItem } from "./CardItem";
import { CourseProject } from "~/shared/types/courseProject";

// Define CardProps type for the Card component
interface CardProps {
	data: CourseProject[];
}

// Card component displays a grid of project cards
export const Card: React.FC<CardProps> = ({ data }) => {
	// If there are no projects to show, display a message
	if (!data.length) return <div>No projects found.</div>;

	return (
		// Flex container for the cards, wraps and spaces them out
		<div className="flex flex-wrap gap-10 justify-between pb-15">
			{/* Render a CardItem for each project */}
			{data.map((project) => (
				<CardItem key={project.id} project={project} />
			))}
		</div>
	);
};
