import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

// Model component loads and renders the Keloglan 3D model
function Model() {
	// useGLTF loads the .glb model and returns the scene graph
	const { scene } = useGLTF("/cp-frontend-ErenSahbaz1/keloglan.glb");
	// Render the loaded model at 1.5x its original size
	return <primitive object={scene} scale={1.5} />;
}

export default function FinalScene3D() {
	return (
		<>
			{/* Absolute container positions the 3D scene deep in the scroll (at 500vh) */}
			<div className="absolute left-1/2 top-[500vh] -translate-x-1/2 w-full h-[90vh] z-40 flex justify-center items-center">
				{/* Canvas sets up the 3D rendering context */}
				<Canvas camera={{ position: [0, 2, 7], fov: 40 }}>
					{/* Ambient light for general illumination */}
					<ambientLight intensity={0.6} />
					{/* Directional light simulates sunlight */}
					<directionalLight position={[300, 10, 10]} intensity={1.2} />
					{/* Environment adds realistic lighting and reflections */}
					<Environment preset="sunset" />
					{/* Render the Keloglan model */}
					<Model />
					{/* OrbitControls allows user to rotate the camera (zoom and pan disabled) */}
					<OrbitControls enableZoom={false} enablePan={false} />
				</Canvas>
			</div>
		</>
	);
}
