import { useRef, useEffect } from "react";
import { Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function KeloText() {
	const textRef = useRef<any>(null);
	const { mouse, camera } = useThree();

	useEffect(() => {
		camera.position.set(0, 0, 7);
	}, [camera]);

	useEffect(() => {
		if (textRef.current && textRef.current.geometry) {
			textRef.current.geometry.center();
		}
	}, []);

	useEffect(() => {
		if (textRef.current) {
			textRef.current.position.y = 5;
			textRef.current.position.z = 0;

			gsap.to(textRef.current.position, {
				y: 0,
				duration: 1.5,
				ease: "power3.out",
				delay: 0.3,
			});
		}
	}, []);

	useFrame(() => {
		if (textRef.current) {
			const maxRotation = 0.15;
			textRef.current.rotation.y = mouse.x * maxRotation;
			textRef.current.rotation.x = -mouse.y * maxRotation;
		}
	});

	return (
		<Text3D
			ref={textRef}
			font="/cp-frontend-ErenSahbaz1/Inter_Bold.json"
			size={1.2}
			height={0.1}
			curveSegments={15}
			bevelEnabled
			bevelThickness={0.3}
			bevelSize={0.02}
			bevelOffset={0}
			bevelSegments={1}
		>
			Keloğlan
			<meshStandardMaterial color="#ffffff" />
		</Text3D>
	);
}
