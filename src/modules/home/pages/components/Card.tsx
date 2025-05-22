import { useNavigate } from "react-router";
import { CourseProject } from "~/shared/types/courseProject";

interface CardProps {
	data: CourseProject[];
}

export const Card: React.FC<CardProps> = ({ data }) => {
	const navigate = useNavigate();

	if (!data.length) return <div>No projects found.</div>;

	const handleCardClick = (projectId: string) => {
		navigate(`/cp-frontend-ErenSahbaz1/making-of/${projectId}`);
	};

	return (
		<div className="flex flex-wrap gap-10 justify-between pb-15">
			{data.map((project) => (
				<div
					key={project.id}
					className="card w-[30%] cursor-pointer"
					onClick={() => handleCardClick(project.id)}
				>
					<div className="w-full aspect-[3/2] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center">
						<img
							className="object-cover w-full h-full"
							style={{
								width: "1200px",
								height: "800px",
								maxWidth: "100%",
								maxHeight: "100%",
							}}
							src={
								project.imgThumbnail ||
								"/cp-frontend-ErenSahbaz1/placeholder.png"
							}
							alt={project.fairytale}
							onError={(e) => {
								(e.currentTarget as HTMLImageElement).src = "/placeholder.png";
							}}
						/>
					</div>
					<h3 className="text-sm mt-2">{project.fairytale}</h3>
					<p className="text-xs">{project.nameStudent}</p>
				</div>
			))}
		</div>
	);
};
