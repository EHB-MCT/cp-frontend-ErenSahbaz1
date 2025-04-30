interface CardProps {
	data: Array<{
		id: number;
		cover: string;
		fable_title: string;
		name: string;
		surname: string;
	}>;
}

export const Card: React.FC<CardProps> = ({ data }) => {
	// Handle empty state
	if (!data.length) return <div>No projects found.</div>;

	return (
		<div>
			{data.map((project) => (
				<div key={project.id} className="card">
					<div>
						<img src={project.cover} alt={project.fable_title} />
					</div>
					<h3>{project.fable_title}</h3>
					<p>
						By: {project.name} {project.surname}
					</p>
				</div>
			))}
		</div>
	);
};
