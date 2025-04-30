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
		<div className="flex flex-wrap gap-4 justify-evenly pb-15">
			{data.map((project) => (
				<div key={project.id} className="card w-[30%]">
					<div className="">
						<img
							className="w-full rounded-2xl"
							src={project.cover}
							alt={project.fable_title}
						/>
					</div>
					<h3 className="text-sm">{project.fable_title}</h3>
					<p className="text-xs">
						{project.name} {project.surname}
					</p>
				</div>
			))}
		</div>
	);
};
