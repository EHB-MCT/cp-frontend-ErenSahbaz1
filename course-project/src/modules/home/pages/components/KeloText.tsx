import { useRef, useEffect } from "react";
import { Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function KeloText() {
	const textRef = useRef<any>(null);
	const { mouse } = useThree();

	useEffect(() => {
		if (textRef.current && textRef.current.geometry) {
			textRef.current.geometry.center();
		}
	}, []);

	useEffect(() => {
		if (textRef.current) {
			textRef.current.position.y = 8;
			gsap.to(textRef.current.position, {
				y: 0,
				duration: 1.2,
				ease: "power3.out",
			});
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (textRef.current) {
				const scrollY = window.scrollY;
				const newY = Math.min(8, scrollY / 50);
				gsap.to(textRef.current.position, {
					y: newY,
					duration: 0.5,
					ease: "power3.out",
				});
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
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
			font="/Inter_Bold.json"
			size={1.5}
			height={0.1}
			curveSegments={15}
			bevelEnabled
			bevelThickness={0.3}
			bevelSize={0.02}
			bevelOffset={0}
			bevelSegments={1}
			position={[0, 0, 0]}
		>
			Keloğlan
			<meshStandardMaterial color="#ffffff" />
		</Text3D>
	);
}
