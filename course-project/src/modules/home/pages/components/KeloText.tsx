import { Text3D } from "@react-three/drei";

export default function KeloText() {
	return (
		<Text3D
			font="/fonts/helvetiker_regular.typeface.json"
			size={1.5}
			height={0.5}
			curveSegments={12}
			bevelEnabled
			bevelSize={0.05}
			bevelThickness={0.1}
		>
			Keloğlan
			<meshStandardMaterial color="#ffffff" />
		</Text3D>
	);
}
