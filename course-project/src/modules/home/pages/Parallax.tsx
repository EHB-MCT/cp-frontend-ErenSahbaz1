import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import KeloText from "./components/KeloText";

export const Parallax = () => {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			{/* Background Image */}
			<img
				src="/scene1.png"
				alt="background"
				className="absolute inset-0 w-full h-full object-cover z-0"
			/>

			{/* 3D Canvas */}
			<Canvas
				className="absolute inset-0 z-10"
				camera={{ position: [0, 0, 10], fov: 50 }}
			>
				<ambientLight intensity={0.5} />
				<directionalLight position={[10, 10, 5]} intensity={1} />
				<KeloText />
				<OrbitControls enableZoom={false} enablePan={false} />
				<Environment preset="sunset" />
			</Canvas>
		</div>
	);
};
