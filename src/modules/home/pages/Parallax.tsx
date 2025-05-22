import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import KeloText from "./components/KeloText";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

export const Parallax = () => {
	const navigate = useNavigate();
	const scene1Ref = useRef<HTMLDivElement>(null);
	const [mountainIn, setMountainIn] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!scene1Ref.current) return;
			const rect = scene1Ref.current.getBoundingClientRect();
			setMountainIn(rect.top < window.innerHeight - 100);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!scene1Ref.current) return;
		const pin = ScrollTrigger.create({
			trigger: scene1Ref.current,
			start: "top top",

			end: () => `+=${scene1Ref.current!.offsetHeight - window.innerHeight}`,
			pin: true,
			pinSpacing: false,
			scrub: true,
		});
		return () => pin.kill();
	}, []);

	return (
		<div className="w-screen bg-[#212121] overflow-x-hidden relative">
			<IoReturnUpBack
				onClick={() => navigate("/cp-frontend-ErenSahbaz1/")}
				className="fixed z-30 mt-8 ml-20 text-white text-2xl cursor-pointer"
			/>

			<div ref={scene1Ref} className="relative h-[160vh] /* <- tweak this */">
				<div className="fixed inset-0 z-10 pointer-events-none">
					<Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
						<ambientLight intensity={0.1} />
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

				<motion.img
					src="/cp-frontend-ErenSahbaz1/mountains.png"
					alt="mountains"
					className="absolute left-1/2 bottom-0 z-20 w-[60vw] -translate-x-1/2"
					initial={{ x: "-100vw" }}
					animate={mountainIn ? { x: "-50%" } : { x: "-100vw" }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				/>
			</div>

			<div
				ref={scene1Ref}
				className="relative mt-[120vh] flex gap-8 justify-center"
			>
				<div className="w-32 h-32 bg-emerald-500" />
				<div className="w-32 h-32 bg-pink-500" />
				<div className="w-32 h-32 bg-yellow-500" />
			</div>
		</div>
	);
};
