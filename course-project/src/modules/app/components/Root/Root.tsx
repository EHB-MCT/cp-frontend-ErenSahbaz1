import { App } from "../App";

const queryClient = new QueryClient();
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const Root = () => (
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
);
