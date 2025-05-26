import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CourseProject } from "~/shared/types/courseProject";
import { useNavigate } from "react-router";

interface CardItemProps {
	project: CourseProject;
}

// CardItem displays a single project card with animation and navigation
export const CardItem: React.FC<CardItemProps> = ({ project }) => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 }); // Detect if card is in viewport
	const navigate = useNavigate(); // For navigation on click

	return (
		<motion.div
			ref={ref} // Attach intersection observer ref
			className="card w-[30%] cursor-pointer"
			onClick={
				() => navigate(`/cp-frontend-ErenSahbaz1/making-of/${project.id}`) // Navigate to project details on click
			}
			initial={{ rotateY: 60, scale: 0.8 }} // Start rotated and scaled down
			animate={inView ? { rotateY: 0, scale: 1 } : { rotateY: 60, scale: 0.8 }} // Animate in when visible
			transition={{ type: "spring", stiffness: 80, damping: 12 }} // Spring animation for smoothness
			style={{ perspective: 1000 }} // Add perspective for 3D effect
		>
			{/* Image container with aspect ratio and rounded corners */}
			<div className="w-full aspect-[3/2] bg-gray-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
				<img
					className="object-cover w-[1200px] h-[800px] max-w-full max-h-full "
					src={
						project.imgThumbnail || "/cp-frontend-ErenSahbaz1/placeholder.png"
					} // Use project image or fallback
					alt={project.fairytale}
					onError={(e) => {
						// Fallback to placeholder if image fails to load
						(e.currentTarget as HTMLImageElement).src =
							"/cp-frontend-ErenSahbaz1/placeholder.png";
					}}
				/>
			</div>
			{/* Project title and student name */}
			<h3 className="text-sm mt-2">{project.fairytale}</h3>
			<p className="text-xs">{project.nameStudent}</p>
		</motion.div>
	);
};
