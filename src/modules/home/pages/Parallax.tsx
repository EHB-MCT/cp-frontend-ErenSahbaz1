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
import FinalScene3D from "./components/FinalScene3D";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxPage = () => {
	const navigate = useNavigate();
	const containerRef = useRef<HTMLDivElement>(null);
	const leftRef = useRef<HTMLImageElement>(null);
	const rightRef = useRef<HTMLImageElement>(null);
	const sunRef = useRef<HTMLImageElement>(null);
	const scene2Ref = useRef<HTMLDivElement>(null);
	const scene3Ref = useRef<HTMLDivElement>(null);
	const swordRef = useRef<HTMLImageElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (
			!containerRef.current ||
			!leftRef.current ||
			!rightRef.current ||
			!scene2Ref.current ||
			!scene3Ref.current ||
			!swordRef.current ||
			!textRef.current
		)
			return;
		//float left mountain
		gsap.to(leftRef.current, {
			y: "+=30",
			duration: 5,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
		});
		//float right mountain
		gsap.to(rightRef.current, {
			y: "+=30",
			duration: 5,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
			delay: 0.7,
		});
		//movement left mountain
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
		//movement right mountain
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
		//movement sun
		gsap.fromTo(
			".sun",
			{ x: 0 },
			{
				x: -800,
				ease: "sine.inOut",
				scrollTrigger: {
					trigger: sunRef.current,
					start: "top+=15% bottom",
					end: "bottom top",
					scrub: 1,
				},
			}
		);
		// movement house
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
		//movement hedgedog
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
		//foreground hedgedog float
		gsap.to(".hedgehog img", {
			y: "+=12",
			repeat: -1,
			yoyo: true,
			duration: 2.5,
			ease: "sine.inOut",
			delay: 0.3,
		});
		//foreground of sword
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
		//movement of fog
		gsap.utils.toArray<HTMLElement>(".fog-layer").forEach((fog, i) => {
			gsap.fromTo(
				fog,
				{ y: 0, opacity: 1, scale: 2.5 },
				{
					y: 2600,
					scale: 2,
					opacity: 0.3,
					ease: "none",
					scrollTrigger: {
						trigger: scene2Ref.current,
						start: "top+=80vh bottom",
						end: "top+=225vh top",
						scrub: 1.1,
					},
				}
			);
		});
		// background river
		gsap.fromTo(
			'img[alt="river"]',
			{ y: 0 },
			{
				y: -90,
				ease: "none",
				scrollTrigger: {
					trigger: scene2Ref.current,
					start: "top+=225vh bottom",
					end: "top+=310vh top",
					scrub: 1,
				},
			}
		);

		// Cave parallax (midground)
		gsap.fromTo(
			'img[alt="cave"]',
			{ y: 0 },
			{
				y: -180,
				ease: "none",
				scrollTrigger: {
					trigger: scene2Ref.current,
					start: "top+=245vh bottom",
					end: "top+=315vh top",
					scrub: 1,
				},
			}
		);

		// Foreground tree
		gsap.fromTo(
			'img[alt="tree"]',
			{ y: 0 },
			{
				y: -300,
				ease: "none",
				scrollTrigger: {
					trigger: scene2Ref.current,
					start: "top+=265vh bottom",
					end: "top+=325vh top",
					scrub: 1,
				},
			}
		);

		// Foreground rocks
		gsap.fromTo(
			'img[alt="rock"]',
			{ y: 0 },
			{
				y: -320,
				ease: "none",
				scrollTrigger: {
					trigger: scene2Ref.current,
					start: "top+=270vh bottom",
					end: "top+=335vh top",
					scrub: 1,
				},
			}
		);
		// make the sword fly to the right
		gsap.fromTo(
			".swordfly",
			{ x: 0 },
			{
				x: 1500,
				ease: "sine.inOut",
				scrollTrigger: {
					trigger: swordRef.current,
					start: "top+=310vh bottom",
					end: "top+=350vh top",
					scrub: 1,
				},
			}
		);
		//fly in of keloglan
		gsap.fromTo(
			".keloglan",
			{ x: "-100vw", opacity: 0 },
			{
				x: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: scene3Ref.current,
					start: "top center",
					end: "top center+=100",
					toggleActions: "play none none none",
				},
				duration: 1.2,
				ease: "power3.out",
			}
		);
		// fly in of the chest
		gsap.fromTo(
			".chest",
			{ x: "100vw", opacity: 0 },
			{
				x: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: scene3Ref.current,
					start: "top center",
					end: "top center+=100",
					toggleActions: "play none none none",
				},
				duration: 1.2,
				ease: "power3.out",
				delay: 0.2,
			}
		);
		//Floating effect for keloglan
		gsap.to(".keloglan", {
			y: "+=30",
			duration: 5,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
			delay: 0.7,
		});

		// Floating effect for Chest
		gsap.to(".chest", {
			y: "+=30",
			duration: 5,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
			delay: 1.2,
		});
		gsap.fromTo(
			".win",
			{ scale: 10 },
			{
				scale: 1,
				scrollTrigger: {
					trigger: textRef.current,
					start: "top center",
					end: "top center+=100",
					toggleActions: "play none none none",
				},
				duration: 3,
				ease: "power3.out",
			}
		);

		gsap.to(".win", {
			y: -15,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
			delay: 1.2, // start after scale animation
		});
	}, []);

	return (
		//background
		<div
			ref={containerRef}
			className="relative w-screen min-h-[600vh] bg-[#212121] overflow-hidden"
		>
			{/* --- return button --- */}
			<IoReturnUpBack
				onClick={() => navigate("/")}
				className="fixed top-8 left-8 text-white text-3xl cursor-pointer z-50"
			/>

			{/* --- 3D text canvas --- */}
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
			{/* --- left mountain --- */}
			<img
				ref={leftRef}
				src="/cp-frontend-ErenSahbaz1/mountains.png"
				alt="front mountains"
				className="absolute top-[15vh] left-1 w-[80vw] z-10"
			/>
			{/* --- right mountain --- */}
			<img
				ref={rightRef}
				src="/cp-frontend-ErenSahbaz1/mountains.png"
				alt="back mountains"
				className="absolute top-[25vh] right-1 w-[45vw] opacity-75 z-0"
			/>
			{/* --- clouds --- */}
			<CloudLayer
				clouds={clouds}
				top="100vh"
				z={20}
				containerRef={containerRef}
			/>
			{/* --- sun --- */}
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
			{/* --- bg trees --- */}
			<div className="absolute left-1/2 top-[80vh] -translate-x-1/2 z-0">
				<img
					src="/cp-frontend-ErenSahbaz1/trees.png"
					alt="trees"
					className="w-[120vw] max-w-[1700px]"
					draggable={false}
				/>
			</div>
			{/* --- foreground of house and sword --- */}
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
			{/* --- hedgedog foreground --- */}
			<div className="hedgehog absolute left-1/2 top-[180vh] z-20 w-[8vw] max-w-[120px] -translate-x-1/2 pointer-events-none">
				<img
					src="/cp-frontend-ErenSahbaz1/hedgedog.png"
					alt="hedgehog"
					className="w-full"
					draggable={false}
				/>
			</div>
			{/* --- cool text scatter --- */}
			<div className="relative top-[80vh] w-full z-50">
				<ScatterText text="Keloglan left his house." />
			</div>
			{/* --- Parallax Fog Transition --- */}
			<div className="absolute left-0 top-[230vh] w-full h-[34vh] z-40 pointer-events-none fog-transition">
				<img
					src="/cp-frontend-ErenSahbaz1/fog.png"
					className="fog-layer absolute left-[5vw]  top-[2vh] w-[60vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/fog2.png"
					className="fog-layer absolute left-[28vw] top-[1vh] w-[50vw] opacity-100"
				/>
				<img
					src="/cp-frontend-ErenSahbaz1/fog3.png"
					className="fog-layer absolute left-[55vw] top-[11vh] w-[45vw] opacity-100"
				/>
			</div>
			{/* --- river bg --- */}
			<div>
				<div className="absolute left-100 top-[260vh] -translate-x-1/2 z-0 w-full flex justify-center pointer-events-none">
					<img
						src="/cp-frontend-ErenSahbaz1/river.png"
						alt="river"
						className="w-[120vw] max-w-[700px]"
						draggable={false}
					/>
				</div>
				{/* --- cave midground --- */}
				<div className="absolute left-1/2 top-[248vh] -translate-x-1/2 z-10 pointer-events-none">
					<img
						src="/cp-frontend-ErenSahbaz1/cave.png"
						alt="cave"
						className=" max-w-[1000px]"
						draggable={false}
					/>
				</div>
				{/* --- scene2 --- */}
				<div
					ref={scene2Ref}
					className="absolute left-110 top-[265vh] z-30 pointer-events-none"
				>
					{/* --- Tree foreground --- */}
					<img
						src="/cp-frontend-ErenSahbaz1/tree.png"
						alt="tree"
						className="w-[18vw] max-w-[300px]"
						draggable={false}
					/>
				</div>

				<div className="absolute left-[42vw] top-[303vh] z-30 pointer-events-none">
					{/* --- rock foreground --- */}
					<img
						src="/cp-frontend-ErenSahbaz1/rock1.png"
						alt="rock"
						className="w-[9vw] max-w-[120px]"
						draggable={false}
					/>
				</div>
				<div className="absolute left-[47vw] top-[303vh] z-30 pointer-events-none">
					{/* --- rock foreground --- */}
					<img
						src="/cp-frontend-ErenSahbaz1/rock2.png"
						alt="rock"
						className="w-[5vw] max-w-[170px]"
						draggable={false}
					/>
				</div>
			</div>
			<div className="absolute left-0 top-[310vh] z-50 swordfly">
				{/* --- sword that does 360 rotate  --- */}
				<motion.img
					src="/cp-frontend-ErenSahbaz1/sword.png"
					alt="sword"
					ref={swordRef}
					className="max-w-[350px] select-none"
					draggable={false}
					animate={{ rotate: 360 }}
					transition={{
						duration: 3,
						ease: "linear",
						repeat: Infinity,
						repeatType: "loop",
					}}
				/>
			</div>
			{/* --- cave background --- */}
			<img
				src="/cp-frontend-ErenSahbaz1/cave-bg.png"
				alt=""
				className="absolute left-1/2 top-[360vh] -translate-x-1/2 w-[120vw] max-w-[1800px] z-0 opacity-95 pointer-events-none"
			/>
			<div ref={scene3Ref} className="">
				{/* --- aura effect --- */}
				<motion.img
					src="/cp-frontend-ErenSahbaz1/aura.png"
					alt="chest aura"
					className="absolute left-[43vw] top-[400vh] w-[37vw] z-30 opacity-80 pointer-events-none"
					initial={{ opacity: 0.5, scale: 0.8 }}
					animate={{
						opacity: [0.5, 1, 0.5],
						scale: [0.98, 1.06, 0.98],
					}}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				{/* --- Keloglan foreground --- */}
				<img
					src="/cp-frontend-ErenSahbaz1/KeloChest.png"
					alt="Keloglan"
					className="keloglan absolute left-[22vw] top-[376vh] w-[37vw]  z-20 pointer-events-none"
				/>
				{/* --- chest foreground --- */}
				<img
					src="/cp-frontend-ErenSahbaz1/chest.png"
					alt="Chest"
					className="chest absolute left-[53vw] top-[408vh] w-[37vw] max-w-[320px] z-20 pointer-events-none"
				/>
			</div>
			{/* --- Keloglan text --- */}
			<div ref={textRef} className="">
				<h1 className="win absolute z-50 top-[490vh] left-1/2 -translate-x-1/2 text-white text-[200px] text-nowrap font-black text-center">
					Keloglan Wins!
				</h1>
			</div>
			{/* --- final keloglan 3D model --- */}
			<FinalScene3D />
		</div>
	);
};
