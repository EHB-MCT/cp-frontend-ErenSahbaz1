import { useParams, useNavigate } from "react-router";

import { IoReturnUpBack } from "react-icons/io5";

import courseProjects from "~/shared/mock/courseProjects.json";

const MakingOf = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const project = courseProjects.find((p) => p.id === Number(id));

	if (!project) {
		return (
			<div className="wrapper text-center py-10">
				<p className="text-xl">Project not found</p>
				<button
					onClick={() => navigate("/")}
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
					onClick={() => navigate("/")}
					className="cursor-pointer size-10 mt"
				/>

				{/* Date + Title + Author */}
				<div className="max-w-5xl mx-auto py-10 px-4">
					<div className="text-center mb-10">
						<p className="text-xs text-gray-500">Posted – 6 may 2025</p>
						<h1 className="text-[10vw] md:text-[12vw] lg:text-[14vw] font-medium mt-2 text-center flex justify-center break-words">
							{project.fable_title}
						</h1>
						<p className="mt-1 font-medium">
							{project.name} {project.surname}
						</p>
					</div>

					{/* Banner Image in black container */}
					<div className="bg-black rounded-lg p-4">
						<img
							src={project.banner}
							alt={project.fable_title}
							className="w-full rounded-lg max-w-[600px] object-contain mx-auto "
						/>
					</div>

					{/* Description */}
					<div className="mt-10">
						<p className="text-xs text-gray-500 mb-2">Description</p>
						<p className="font-bold text-base leading-relaxed">
							{project.description}
						</p>
					</div>

					{/* Gallery */}
					<div className="mt-12">
						<h2 className="text-2xl font-bold mb-4">
							See what the FairyTale looks like
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-2 gap-6">
							{project.extra_image1 && (
								<div className="bg-black rounded-lg overflow-hidden">
									<img
										src={project.extra_image1}
										alt="Process 1"
										className="w-full h-52 object-cover"
									/>
								</div>
							)}
							{project.extra_image2 && (
								<div className="bg-black rounded-lg overflow-hidden">
									<img
										src={project.extra_image2}
										alt="Process 2"
										className="w-full h-52 object-cover"
									/>
								</div>
							)}
							{project.extra_image3 && (
								<div className="bg-black rounded-lg overflow-hidden">
									<img
										src={project.extra_image3}
										alt="Process 3"
										className="w-full h-52 object-cover"
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MakingOf;
