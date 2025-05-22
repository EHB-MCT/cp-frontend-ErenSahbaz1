import { useParams, useNavigate } from "react-router";
import { IoReturnUpBack } from "react-icons/io5";
import WavyTitle from "./components/WavyTitle";
import courseProjects from "~/shared/mock/courseProjects.json";

const MakingOf = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const project = courseProjects.find((p) => p.id === id);

	if (!project) {
		return (
			<div className="wrapper text-center py-10">
				<p className="text-xl">Project not found</p>
				<button
					onClick={() => navigate("/cp-frontend-ErenSahbaz1/")}
					className="mt-4 bg-zinc-700 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold"
				>
					Back to Home
				</button>
			</div>
		);
	}

	return (
		<>
			<div className="wrapper">
				<IoReturnUpBack
					onClick={() => navigate("/cp-frontend-ErenSahbaz1/")}
					className="cursor-pointer size-10 mt-8"
				/>

				<div className="">
					<div className="text-center mb-10">
						<p className="text-xs text-gray-500">Posted – 6 may 2025</p>
						<WavyTitle>{project.fairytale}</WavyTitle>
						<p className="mt-1 font-medium">{project.nameStudent}</p>
					</div>

					<div className="bg-black rounded-xl p-7 flex justify-center items-center h-[700px]">
						<div className="w-full h-full overflow-hidden rounded-lg">
							<img
								src={project.imgBanner}
								alt={project.fairytale}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					<div className="mt-10">
						<p className="text-xs text-gray-500 mb-2">Description</p>
						<p className="font-bold text-base leading-relaxed">
							{project.description}
						</p>
					</div>

					<div className="mt-12 pb-7">
						<h2 className="text-2xl font-bold mb-4">
							See what the FairyTale looks like
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-2 gap-6">
							{project.imgsExtra?.[0] && (
								<div className="bg-black rounded-lg overflow-hidden">
									<img
										src={project.imgsExtra[0]}
										alt="Process 1"
										className="w-full h-[400px] object-cover"
									/>
								</div>
							)}
							{project.imgsExtra?.[1] && (
								<div className="bg-black rounded-lg overflow-hidden">
									<img
										src={project.imgsExtra[1]}
										alt="Process 2"
										className="w-full h-[400px] object-cover"
									/>
								</div>
							)}
							{project.imgsExtra?.[2] && (
								<div className="bg-black rounded-lg overflow-hidden">
									<img
										src={project.imgsExtra[2]}
										alt="Process 3"
										className="w-full h-[400px] object-cover"
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			{project.fairytaleLink && (
				<a
					href={project.fairytaleLink}
					target="_blank"
					rel="noopener noreferrer"
					className="fixed bottom-6 cursor-pointer left-1/2 -translate-x-1/2 z-50 bg-zinc-800 text-white px-8 py-3 rounded-xl shadow-lg text-base font-semibold hover:bg-zinc-700 transition"
				>
					Visit Site
				</a>
			)}
		</>
	);
};

export default MakingOf;
