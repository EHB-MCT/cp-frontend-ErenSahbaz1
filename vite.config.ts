import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/cp-frontend-ErenSahbaz1/",

	plugins: [react(), tsconfigPaths(), tailwindcss()],
});
