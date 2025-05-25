import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import KeloText from "./components/KeloText";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScatterText from "./components/ScatterText";
import { motion } from "framer-motion";
import CloudLayer from "./components/CloudLayer";
import { clouds } from "./components/CloudLayer";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxPage = () => {
	const navigate = useNavigate();
	const containerRef = useRef<HTMLDivElement>(null);
	const leftRef = useRef<HTMLImageElement>(null);
	const rightRef = useRef<HTMLImageElement>(null);
	const sunRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (!containerRef.current || !leftRef.current || !rightRef.current) return;

		gsap.to(leftRef.current, {
			y: "+=30",
			duration: 5,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
		});
		gsap.to(rightRef.current, {
			y: "+=30",
			duration: 5,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
			delay: 0.7,
		});

		gsap.fromTo(
			leftRef.current,
			{ x: -200 },
			{
				x: 0,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				},
			}
		);
		gsap.fromTo(
			rightRef.current,
			{ x: 200 },
			{
				x: 0,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				},
			}
		);
		gsap.fromTo(
			".sun",
			{ x: 0 },
			{
				x: -500,
				ease: "sine.inOut",
				scrollTrigger: {
					trigger: sunRef.current,
					start: "top+=15% bottom",
					end: "bottom top",
					scrub: 1,
				},
			}
		);
		gsap.fromTo(
			".house",
			{ y: 0 },
			{
				y: -300,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				},
			}
		);
		gsap.fromTo(
			".hedgehog",
			{ y: 0, rotate: 0 },
			{
				y: 220,
				rotate: 1080,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				},
			}
		);

		gsap.to(".hedgehog img", {
			y: "+=12",
			repeat: -1,
			yoyo: true,
			duration: 2.5,
			ease: "sine.inOut",
			delay: 0.3,
		});
		gsap.fromTo(
			".foreground-sword",
			{ y: 0 },
			{
				y: -250,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: 3,
				},
			}
		);
		const fogYs = [-120, -170, -140]; // pixels each fog image moves upward (adjust for taste)
		gsap.utils.toArray<HTMLElement>(".fog-layer").forEach((fog, i) => {
			gsap.fromTo(
				fog,
				{ y: 0, opacity: 1 },
				{
					y: fogYs[i],
					opacity: 0.3 + 0.2 * (2 - i), // Each fog layer fades a little as it rises
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top+=80vh bottom", // Start scroll when top of scene is at bottom of viewport
						end: "top+=225vh top", // End scroll when top of scene is at top of viewport
						scrub: 1,
					},
				}
			);
		});
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative w-screen min-h-[400vh] bg-[#212121] overflow-hidden"
		>
			<IoReturnUpBack
				onClick={() => navigate("/")}
				className="fixed top-8 left-8 text-white text-3xl cursor-pointer z-30"
			/>
			<div className="h-[100vh] flex items-center justify-center pointer-events-none z-20 relative">
				<Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
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
			<img
				ref={leftRef}
				src="/cp-frontend-ErenSahbaz1/mountains.png"
				alt="front mountains"
				className="absolute top-[15vh] left-1 w-[80vw] z-10"
			/>
			<img
				ref={rightRef}
				src="/cp-frontend-ErenSahbaz1/mountains.png"
				alt="back mountains"
				className="absolute top-[25vh] right-1 w-[45vw] opacity-75 z-0"
			/>
			<CloudLayer
				clouds={clouds}
				top="100vh" // or wherever you want the cloud band to start
				z={20} // optional: z-index, default is 20
				containerRef={containerRef} // your main scroll container ref for parallax
			/>

			<div className="sun absolute top-[105vh] right-[-5vw] z-30">
				<motion.img
					src="/cp-frontend-ErenSahbaz1/sun.png"
					alt="sun"
					ref={sunRef}
					className=" max-w-[350px] select-none cursor-pointer"
					draggable={false}
					whileHover={{ rotate: 360 }}
					whileTap={{ scale: 0.0005 }}
					transition={{ duration: 3, ease: "linear", repeat: 0 }}
				/>
			</div>
			<div className="absolute left-1/2 top-[80vh] -translate-x-1/2 z-0">
				<img
					src="/cp-frontend-ErenSahbaz1/trees.png"
					alt="trees"
					className="w-[120vw] max-w-[1700px]"
					draggable={false}
				/>
			</div>

			<div className="absolute left-1/2 top-[140vh]  -translate-x-1/2 z-10">
				<img
					src="/cp-frontend-ErenSahbaz1/house.png"
					alt="house"
					className="house max-w-[1300px]"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/sword.png"
					alt="sword"
					className="foreground-sword absolute left-[20vw] bottom-[35vh] w-[16vw] max-w-[220px] z-40 pointer-events-none rotate-[-25deg]"
				/>
			</div>
			<div className="hedgehog absolute left-1/2 top-[180vh] z-20 w-[8vw] max-w-[120px] -translate-x-1/2 pointer-events-none">
				<img
					src="/cp-frontend-ErenSahbaz1/hedgedog.png"
					alt="hedgehog"
					className="w-full"
					draggable={false}
				/>
			</div>

			<div className="relative top-[80vh] w-full z-50">
				<ScatterText />
			</div>
			{/* --- Parallax Fog Transition --- */}
			<div className="absolute left-0 top-[250vh] w-full h-[34vh] z-40 pointer-events-none fog-transition">
				<img
					src="/cp-frontend-ErenSahbaz1/fog.png"
					className="fog-layer absolute left-[5vw]  top-[2vh] w-[60vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/fog2.png"
					className="fog-layer absolute left-[28vw] top-[10vh] w-[50vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/fog3.png"
					className="fog-layer absolute left-[55vw] top-[18vh] w-[45vw] opacity-100"
				/>
			</div>
		</div>
	);
};
