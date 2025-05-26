import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Cloud = {
	src: string;
	className?: string;
};

interface CloudLayerProps {
	clouds: Cloud[];
	top?: string;
	z?: number;
	containerRef: React.RefObject<HTMLDivElement>;
}

export const clouds = [
	{
		src: "/cp-frontend-ErenSahbaz1/cloud1.png",
		className: "left-[15vw] top-[45vh] w-[15vw] opacity-100",
	},
	{
		src: "/cp-frontend-ErenSahbaz1/cloud2.png",
		className: "left-[23vw] top-[43vh] w-[23vw] opacity-100",
	},
	{
		src: "/cp-frontend-ErenSahbaz1/cloud3.png",
		className: "left-[44vw] top-[45vh] w-[29vw] opacity-100",
	},
	{
		src: "/cp-frontend-ErenSahbaz1/cloud4.png",
		className: "left-[68vw] top-[38vh] w-[30vw] opacity-100",
	},
	{
		src: "/cp-frontend-ErenSahbaz1/cloud1.png",
		className: "left-[15vw] top-[46vh] w-[31vw] opacity-100",
	},
	{
		src: "/cp-frontend-ErenSahbaz1/cloud2.png",
		className: "left-[27vw] top-[48vh] w-[21vw] opacity-100",
	},
	{
		src: "/cp-frontend-ErenSahbaz1/cloud2.png",
		className: "left-[47vw] top-[48vh] w-[21vw] opacity-100",
	},
	{
		src: "/cp-frontend-ErenSahbaz1/cloud2.png",
		className: "left-[77vw] top-[48vh] w-[21vw] opacity-100",
	},
	{
		src: "/cp-frontend-ErenSahbaz1/cloud3.png",
		className: "left-[60vw] top-[40vh] w-[19vw] opacity-100",
	},
	{
		src: "/cp-frontend-ErenSahbaz1/cloud4.png",
		className: "left-[82vw] top-[38vh] w-[24vw] opacity-100",
	},
];

export default function CloudLayer({
	clouds,
	top = "100vh",
	z = 20,
	containerRef,
}: CloudLayerProps) {
	const layerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const yMoves = [
			-1750, -1900, -1800, -1880, -1650, -1970, -1860, -1720, -1920, -1890,
		]; // Parallax Y distances for each cloud
		const xMoves = [-200, 20, -40, 25, -15, 40, 10, -25]; // Wiggle X distances

		const cloudElems = gsap.utils.toArray<HTMLElement>(".cloud");
		cloudElems.forEach((cloud, i) => {
			// Parallax Y movement with scroll
			gsap.fromTo(
				cloud,
				{ y: 0 },
				{
					y: yMoves[i % yMoves.length],
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current, // Parallax relative to main container
						start: "top bottom",
						end: "bottom top",
						scrub: 1, // Smoothly follows scroll
					},
				}
			);

			// Animate X (wiggle) for a lively effect
			gsap.to(cloud, {
				x: xMoves[i % xMoves.length] + (Math.random() * 10 - 5), // Slight random offset
				repeat: -1,
				yoyo: true,
				duration: Math.random() * 2 + 2, // Random duration for natural feel
				ease: "sine.inOut",
				delay: Math.random() * 2, // Random delay for desynchronization
			});
			// Animate scale (breathing) for subtle life
			gsap.to(cloud, {
				scale: 1 + Math.random() * 0.06, // Slight scale variation
				repeat: -1,
				yoyo: true,
				duration: Math.random() * 2 + 2,
				ease: "sine.inOut",
				delay: Math.random() * 2,
			});
		});
	}, [containerRef]);

	return (
		// Layer container, absolutely positioned at the given top and z-index
		<div
			className={`absolute right-30 top-[${top}] w-full h-[40vh] z-${z} pointer-events-none`}
			ref={layerRef}
		>
			{/* Render each cloud as an absolutely positioned image */}
			{clouds.map((cloud, i) => (
				<img
					key={i}
					src={cloud.src}
					className={`cloud absolute ${cloud.className || ""}`}
				/>
			))}
		</div>
	);
}
