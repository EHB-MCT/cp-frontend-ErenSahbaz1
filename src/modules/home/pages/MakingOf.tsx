import { useParams, useNavigate } from "react-router";
import { IoReturnUpBack } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import WavyTitle from "./components/WavyTitle";
import courseProjects from "~/shared/mock/courseProjects.json";
import YoutubeEmbed from "./components/YoutubeEmbed";
import ScrollFloat from "./components/ScrollFloat";

const MakingOf = () => {
	const { id } = useParams(); // Get project ID from URL params
	const navigate = useNavigate(); // Navigation hook
	const { t } = useTranslation(); // Translation hook

	const project = courseProjects.find((p) => p.id === id); // Find the project by ID

	// Helper function to get translated description
	const getTranslatedDescription = (projectId: string) => {
		// Try to get translation
		const translatedDesc = t(`descriptions.${projectId}`, {
			defaultValue: "",
		});

		// If translation exists and is not empty, use it
		// Otherwise fall back to the original description
		return translatedDesc || project?.description;
	};

	// If project is not found, show a not found message and back button
	if (!project) {
		return (
			<div className="wrapper text-center py-10">
				<p className="text-xl">{t("makingOf.projectNotFound")}</p>
				<button
					onClick={() => navigate("/cp-frontend-ErenSahbaz1/")}
					className="mt-4 bg-zinc-700 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold cursor-pointer"
				>
					{t("makingOf.back")}
				</button>
			</div>
		);
	}

	return (
		<>
			<div className="wrapper">
				{/* Back button (icon) */}
				<IoReturnUpBack
					onClick={() => navigate("/cp-frontend-ErenSahbaz1/")}
					className="cursor-pointer size-10 mt-8"
				/>

				<div className="">
					{/* Project title and student name */}
					<div className="text-center mb-10">
						<p className="text-xs text-gray-500">{t("makingOf.posted")}</p>
						<WavyTitle>{project.fairytale}</WavyTitle>
						<p className="mt-1 font-medium">{project.nameStudent}</p>
					</div>

					{/* Banner image */}
					<div className="bg-black rounded-xl p-7 flex justify-center items-center h-[700px]">
						<div className="w-full h-full overflow-hidden rounded-lg">
							<img
								src={project.imgBanner}
								alt={project.fairytale}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* Description section with floating animation */}
					<div className="mt-10">
						<p className="text-xs text-gray-500 m-0">
							{t("makingOf.description")}
						</p>
						<ScrollFloat textClassName="font-bold text-lg leading-relaxed mt-2">
							{/* Use the translated description when available */}
							{getTranslatedDescription(project.id)}
						</ScrollFloat>
					</div>

					{/* Extra images and video */}
					<div className="mt-12 pb-7">
						<h2 className="text-2xl font-bold mb-4">{t("makingOf.seeMore")}</h2>
						<div className="grid grid-cols-2 md:grid-cols-2 gap-6">
							{/* Render up to 3 extra images if available */}
							{project.imgsExtra?.[0] && (
								<div className="bg-black rounded-lg overflow-hidden">
									<img
										src={project.imgsExtra[0]}
										alt={`${t("makingOf.process")} 1`}
										className="w-full h-[400px] object-cover"
									/>
								</div>
							)}
							{project.imgsExtra?.[1] && (
								<div className="bg-black rounded-lg overflow-hidden">
									<img
										src={project.imgsExtra[1]}
										alt={`${t("makingOf.process")} 2`}
										className="w-full h-[400px] object-cover"
									/>
								</div>
							)}
							{project.imgsExtra?.[2] && (
								<div className="bg-black rounded-lg overflow-hidden">
									<img
										src={project.imgsExtra[2]}
										alt={`${t("makingOf.process")} 3`}
										className="w-full h-[400px] object-cover"
									/>
								</div>
							)}
							{/* Render video if available */}
							{project.videoExplainer && (
								<div className="my-8">
									<YoutubeEmbed embedId={project.videoExplainer} />
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Button to visit the project website if available */}
				{project.fairytaleLink && (
					<a
						href={project.fairytaleLink}
						target="_blank"
						rel="noopener noreferrer"
						className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-800 text-white px-8 py-3 rounded-xl shadow-lg text-base font-semibold hover:bg-zinc-700 transition"
					>
						{t("makingOf.visitSite")}
					</a>
				)}
			</div>
		</>
	);
};

export default MakingOf;
