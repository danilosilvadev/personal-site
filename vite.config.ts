import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps every asset link relative, so the same build works at a user-pages root and at a project-pages path (/personal-site/).
export default defineConfig({ base: "./", plugins: [react()] });
