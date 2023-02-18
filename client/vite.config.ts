import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	resolve: {
		alias: {
			Components: path.resolve(__dirname, './src/components'),
			Assets: path.resolve(__dirname, './src/assets'),
		},
	},
	plugins: [react(), tsconfigPaths()],
})
