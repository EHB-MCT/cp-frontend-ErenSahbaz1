import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";

interface ScatterTextProps {
	text?: string;
	className?: string;
}

export default function ScatterText({
	text = "Hover over this text",
	className = "text-4xl md:text-6xl font-bold text-white text-center",
}: ScatterTextProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const velocityX = useMotionValue(0);
	const velocityY = useMotionValue(0);
	const prevEvent = useRef(0);

	useEffect(() => {
		if (!containerRef.current) return;

		const { chars } = splitText(containerRef.current.querySelector(".h1")!);

		const handlePointerMove = (event: PointerEvent) => {
			const now = performance.now();
			const timeSinceLastEvent = (now - prevEvent.current) / 1000; // seconds
			prevEvent.current = now;
			velocityX.set(event.movementX / timeSinceLastEvent);
			velocityY.set(event.movementY / timeSinceLastEvent);
		};

		document.addEventListener("pointermove", handlePointerMove);

		hover(chars, (element) => {
			// Calculate the speed of the pointer movement
			// and use that to calculate the distance the character should move
			const speed = Math.sqrt(
				velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
			);
			const angle = Math.atan2(velocityY.get(), velocityX.get());
			const distance = speed * 0.1;

			animate(
				element,
				{
					x: Math.cos(angle) * distance,
					y: Math.sin(angle) * distance,
				},
				{ type: "spring", stiffness: 100, damping: 50 }
			);
		});

		return () => {
			document.removeEventListener("pointermove", handlePointerMove);
		};
	}, [text]); // Re-run the effect when text changes

	return (
		<div
			className="w-full h-screen flex items-center justify-center"
			ref={containerRef}
		>
			<h1 className={`h1 ${className}`}>{text}</h1>
		</div>
	);
}
