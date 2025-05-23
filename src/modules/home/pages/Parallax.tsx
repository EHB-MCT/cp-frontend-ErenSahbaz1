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

gsap.registerPlugin(ScrollTrigger);

export const ParallaxPage = () => {
	const navigate = useNavigate();
	const containerRef = useRef<HTMLDivElement>(null);
	const leftRef = useRef<HTMLImageElement>(null);
	const rightRef = useRef<HTMLImageElement>(null);
	const sunRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (!containerRef.current || !leftRef.current || !rightRef.current) return;

		const yMoves = [
			-1750, -1900, -1800, -1880, -1650, -1970, -1860, -1720, -1920, -1890,
		];

		const xMoves = [-200, 20, -40, 25, -15, 40, 10, -25];

		const clouds = gsap.utils.toArray<HTMLElement>(".cloud");

		clouds.forEach((cloud, i) => {
			// ScrollTrigger: y and x move together on scroll
			gsap.fromTo(
				cloud,
				{ y: 0, x: 0 },
				{
					y: yMoves[i],
					x: xMoves[i],
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
					},
				}
			);

			// float animation x axis
			gsap.to(cloud, {
				x: "+=" + (Math.random() * 10 + 10) * (i % 2 ? 1 : -1),
				repeat: -1,
				yoyo: true,
				duration: Math.random() * 2 + 2,
				ease: "sine.inOut",
				delay: Math.random() * 2,
			});

			//gentle breathing
			gsap.to(cloud, {
				scale: 1 + Math.random() * 0.06,
				repeat: -1,
				yoyo: true,
				duration: Math.random() * 2 + 2,
				ease: "sine.inOut",
				delay: Math.random() * 2,
			});
		});

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
					start: "top bottom",
					end: "bottom top",
					scrub: true,
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
					scrub: true,
				},
			}
		);
		gsap.fromTo(
			".hedgehog",
			{ y: 0, x: 0 },
			{
				y: -600,
				x: -10,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
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
					scrub: true,
				},
			}
		);
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
			<div className="absolute top-[100vh] right-30 w-full h-[40vh] pointer-events-none z-20">
				<img
					src="/cp-frontend-ErenSahbaz1/cloud1.png"
					className="cloud absolute left-[15vw]  top-[45vh] w-[15vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/cloud2.png"
					className="cloud absolute left-[23vw] top-[43vh] w-[23vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/cloud3.png"
					className="cloud absolute left-[44vw] top-[45vh] w-[29vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/cloud4.png"
					className="cloud absolute left-[68vw] top-[38vh] w-[30vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/cloud1.png"
					className="cloud absolute left-[15vw] top-[46vh] w-[31vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/cloud2.png"
					className="cloud absolute left-[27vw] top-[48vh] w-[21vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/cloud2.png"
					className="cloud absolute left-[47vw] top-[48vh] w-[21vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/cloud2.png"
					className="cloud absolute left-[77vw] top-[48vh] w-[21vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/cloud3.png"
					className="cloud absolute left-[60vw] top-[40vh] w-[19vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/cloud4.png"
					className="cloud absolute left-[82vw] top-[38vh] w-[24vw] opacity-100"
				/>
			</div>
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
			<div className="hedgehog absolute left-1/2 top-[230vh] z-20 w-[8vw] max-w-[120px] -translate-x-1/2 pointer-events-none">
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
		</div>
	);
};
