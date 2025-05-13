import { useState } from "react";
import { Navigation } from "~/core/components/Navigation";
import courseProjectsMock from "~/shared/mock/courseProjects.json";
import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";

export const Parallax = () => {
	const [filteredProjects, setFilteredProjects] = useState(courseProjectsMock);

	return (
		<div className="wrapper">
			<Navigation
				courseProjects={courseProjectsMock}
				setFilteredProjects={setFilteredProjects}
			/>

			<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
				<MouseParallaxChild factorX={0.3} factorY={0.5}>
					<h1>Hello world</h1>
				</MouseParallaxChild>
			</MouseParallaxContainer>
		</div>
	);
};
