import { useNavigate } from "react-router";

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
	const navigate = useNavigate();

	if (!data.length) return <div>No projects found.</div>;

	// Function to handle card click
	const handleCardClick = (projectId: number) => {
		navigate(`/making-of/${projectId}`);
	};

	return (
		<div className="flex flex-wrap gap-4 justify-evenly pb-15">
			{data.map((project) => (
				<div
					key={project.id}
					className="card w-[30%] cursor-pointer "
					onClick={() => handleCardClick(project.id)}
				>
					<div>
						<img
							className="w-full rounded-2xl ease-in transition-transform hover:-translate-y-0.5 hover:shadow-lg"
							src={project.cover}
							alt={project.fable_title}
						/>
					</div>
					<h3 className="text-sm mt-2">{project.fable_title}</h3>
					<p className="text-xs">
						{project.name} {project.surname}
					</p>
				</div>
			))}
		</div>
	);
};
