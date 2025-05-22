import { App } from "../App";
import { createHashRouter, RouterProvider, Navigate } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Portal from "~/home/pages/Portal";
import { ParallaxPage } from "~/home/pages";
import MakingOf from "~/home/pages/MakingOf";

const queryClient = new QueryClient();

const router = createHashRouter([
	{
		path: "/",
		element: <Navigate to="/cp-frontend-ErenSahbaz1/" replace />,
	},
	{
		path: "/cp-frontend-ErenSahbaz1/",
		element: <App />,
		children: [
			{ index: true, element: <Portal /> },
			{ path: "/cp-frontend-ErenSahbaz1/parallax", element: <ParallaxPage /> },
			{ path: "/cp-frontend-ErenSahbaz1/making-of/:id", element: <MakingOf /> },
		],
	},
]);

export const Root = () => (
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>
);
