import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react"; // Import React plugin
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()], // Enable React support
    root: "src",
    base: "/personal-ps2-portfolio/", // GitHub Pages base path
    publicDir: path.resolve(__dirname, "public"), // Ensures public assets are copied
    build: {
      outDir: path.resolve(__dirname, "dist"), // Ensures dist is at project root
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "src/index.html"), // React Landing Page
          memoryMenu: path.resolve(__dirname, "src/memory-card-menu/memory-menu.html"),
          gameMenu: path.resolve(__dirname, "src/game-menu/game-menu.html"),
          contact: path.resolve(__dirname, "src/contact/contact.html"),
          intro: path.resolve(__dirname, "src/intro/intro.html"),
        },
      },
    },
    server: {
      port: 5173, // Ensures local development works on a standard port
      open: true, // Automatically opens the browser when running `npm run dev`
    },
    define: {
      "import.meta.env.VITE_EMAILJS_PUBLIC_KEY": JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY),
      "import.meta.env.VITE_EMAILJS_SERVICE_ID": JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
      "import.meta.env.VITE_EMAILJS_TEMPLATE_ID": JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID),
    },
  };
});
