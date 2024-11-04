import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: [{ find: "@/", replacement: `${__dirname}/resources/ts/` }],
	},
	plugins: [
		laravel({
			refresh: true,

			input: ["resources/sass/app.scss", "resources/ts/index.tsx"],
		}),
		react(),
	],
});
