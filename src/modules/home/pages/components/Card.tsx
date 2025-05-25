import { CardItem } from "./CardItem";

export const Card: React.FC<CardProps> = ({ data }) => {
	if (!data.length) return <div>No projects found.</div>;

	return (
		<div className="flex flex-wrap gap-10 justify-between pb-15">
			{data.map((project) => (
				<CardItem key={project.id} project={project} />
			))}
		</div>
	);
};
