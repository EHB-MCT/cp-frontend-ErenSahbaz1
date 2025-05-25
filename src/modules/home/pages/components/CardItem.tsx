import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CourseProject } from "~/shared/types/courseProject";
import { useNavigate } from "react-router";

interface CardItemProps {
	project: CourseProject;
}

export const CardItem: React.FC<CardItemProps> = ({ project }) => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
	const navigate = useNavigate();

	return (
		<motion.div
			ref={ref}
			className="card w-[30%] cursor-pointer"
			onClick={() =>
				navigate(`/cp-frontend-ErenSahbaz1/making-of/${project.id}`)
			}
			initial={{ rotateY: 60, scale: 0.8 }}
			animate={inView ? { rotateY: 0, scale: 1 } : { rotateY: 60, scale: 0.8 }}
			transition={{ type: "spring", stiffness: 80, damping: 12 }}
			style={{ perspective: 1000 }}
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
						project.imgThumbnail || "/cp-frontend-ErenSahbaz1/placeholder.png"
					}
					alt={project.fairytale}
					onError={(e) => {
						(e.currentTarget as HTMLImageElement).src =
							"/cp-frontend-ErenSahbaz1/placeholder.png";
					}}
				/>
			</div>
			<h3 className="text-sm mt-2">{project.fairytale}</h3>
			<p className="text-xs">{project.nameStudent}</p>
		</motion.div>
	);
};
