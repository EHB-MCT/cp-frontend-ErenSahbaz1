import { FC } from "react";
import { Outlet } from "react-router";

export const App: FC = () => {
	return (
		<>
			<Outlet />
		</>
	);
};
