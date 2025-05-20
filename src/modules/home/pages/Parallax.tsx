import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import KeloText from "./components/KeloText";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router";

export const Parallax = () => {
	const navigate = useNavigate();

	return (
		<div className="relative w-screen h-screen overflow-hidden bg-[#212121]">
			<IoReturnUpBack
				onClick={() => navigate("/cp-frontend-ErenSahbaz1/")}
				className="cursor-pointer size-10 mt-8"
			/>
			<Canvas
				className="absolute inset-0 z-10"
				camera={{ position: [0, 0, 10], fov: 50 }}
			>
				<ambientLight intensity={0.5} />
				<directionalLight position={[10, 10, 5]} intensity={10} />
				<KeloText />
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					enableRotate={false}
				/>
				<Environment preset="sunset" />
			</Canvas>
		</div>
	);
};
