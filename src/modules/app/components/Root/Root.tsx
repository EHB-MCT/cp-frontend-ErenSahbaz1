import { App } from "../App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Portal from "~/home/pages/Portal";
import { Parallax } from "~/home/pages";
import MakingOf from "~/home/pages/MakingOf";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Portal /> },
			{ path: "parallax", element: <Parallax /> },
			{ path: "making-of/:id", element: <MakingOf /> },
		],
	},
]);

export const Root = () => (
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>
);
