import { useRef, useEffect } from "react";
import { Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function KeloText() {
	const textRef = useRef<any>(null); // Reference to the 3D text mesh
	const { mouse, camera } = useThree(); // Access mouse position and camera from the 3D scene

	// Set the camera position when the component mounts
	useEffect(() => {
		camera.position.set(0, 0, 7);
	}, [camera]);

	// Center the geometry of the text after it's created
	useEffect(() => {
		if (textRef.current && textRef.current.geometry) {
			textRef.current.geometry.center();
		}
	}, []);

	// Animate the text dropping in from above when the component mounts
	useEffect(() => {
		if (textRef.current) {
			textRef.current.position.y = 5; // Start above the scene
			textRef.current.position.z = 0;

			gsap.to(textRef.current.position, {
				y: 0, // Animate to y=0 (center)
				duration: 1.5,
				ease: "power3.out",
				delay: 0.3,
			});
		}
	}, []);

	// On every frame, rotate the text slightly based on mouse position for interactivity
	useFrame(() => {
		if (textRef.current) {
			const maxRotation = 0.15; // Maximum rotation in radians
			textRef.current.rotation.y = mouse.x * maxRotation; // Horizontal mouse movement
			textRef.current.rotation.x = -mouse.y * maxRotation; // Vertical mouse movement (inverted)
		}
	});

	return (
		<Text3D
			ref={textRef}
			font="/cp-frontend-ErenSahbaz1/Inter_Bold.json" // Path to the 3D font
			size={1.2} // Size of the text
			height={0.1} // Depth of the text extrusion
			curveSegments={15} // Smoothness of the curves
			bevelEnabled // Enable bevel for a smoother edge
			bevelThickness={0.3}
			bevelSize={0.02}
			bevelOffset={0}
			bevelSegments={1}
		>
			Keloğlan
			<meshStandardMaterial color="#ffffff" />{" "}
		</Text3D>
	);
}
