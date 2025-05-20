import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function WavyTitle({ children }: { children: string }) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.fonts.ready.then(() => {
			if (!containerRef.current) return;

			const { chars } = splitText(containerRef.current.querySelector(".wavy")!);
			containerRef.current.style.visibility = "visible";

			const staggerDelay = 0.15;

			animate(
				chars,
				{ y: [-20, 20] },
				{
					repeat: Infinity,
					repeatType: "mirror",
					ease: "easeInOut",
					duration: 2,
					delay: stagger(staggerDelay, {
						startDelay: -staggerDelay * chars.length,
					}),
				}
			);
		});
	}, []);

	return (
		<div
			className="flex justify-center items-center w-full"
			ref={containerRef}
			style={{ visibility: "hidden" }}
		>
			<h1 className="wavy text-[10vw] md:text-[12vw] lg:text-[14vw] font-medium mt-2 text-center break-words leading-none">
				{children}
			</h1>
			<style>{`
                .split-char {
                    will-change: transform, opacity;
                    display: inline-block;
                }
            `}</style>
		</div>
	);
}
