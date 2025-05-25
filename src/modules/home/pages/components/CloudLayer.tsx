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
		];
		const xMoves = [-200, 20, -40, 25, -15, 40, 10, -25];

		const cloudElems = gsap.utils.toArray<HTMLElement>(".cloud");
		cloudElems.forEach((cloud, i) => {
			gsap.fromTo(
				cloud,
				{ y: 0, x: 0 },
				{
					y: yMoves[i % yMoves.length],
					x: xMoves[i % xMoves.length],
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top bottom",
						end: "bottom top",
						scrub: 1,
					},
				}
			);
			gsap.to(cloud, {
				x: "+=" + (Math.random() * 10 + 10) * (i % 2 ? 1 : -1),
				repeat: -1,
				yoyo: true,
				duration: Math.random() * 2 + 2,
				ease: "sine.inOut",
				delay: Math.random() * 2,
			});
			gsap.to(cloud, {
				scale: 1 + Math.random() * 0.06,
				repeat: -1,
				yoyo: true,
				duration: Math.random() * 2 + 2,
				ease: "sine.inOut",
				delay: Math.random() * 2,
			});
		});
	}, [containerRef]);

	return (
		<div
			className={`absolute right-30 top-[${top}] w-full h-[40vh] z-${z} pointer-events-none`}
			ref={layerRef}
		>
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
