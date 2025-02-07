import { defineConfig, loadEnv } from "vite";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load environment variables from .env.local
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: "src", // Vite looks inside the src/ folder for index.html
    base: "/personal-ps2-portfolio/", // GitHub Pages expects this base path
    build: {
      outDir: "../dist", // Moves dist to the project root, NOT inside src/
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "src/index.html"),
          memoryMenu: path.resolve(__dirname, "src/memory-card-menu/memory-menu.html"),
          gameMenu: path.resolve(__dirname, "src/game-menu/game-menu.html"),
        },
      },
    },
    define: {
      "import.meta.env.VITE_EMAILJS_PUBLIC_KEY": JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY),
      "import.meta.env.VITE_EMAILJS_SERVICE_ID": JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
      "import.meta.env.VITE_EMAILJS_TEMPLATE_ID": JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID),
    },
  };
});
