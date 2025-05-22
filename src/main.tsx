import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "~/app/components/Root";
import "~/core/i18n/i18n.config";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ParallaxProvider>
			<Root />
		</ParallaxProvider>
	</StrictMode>
);
