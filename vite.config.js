import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load environment variables from .env.local
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: "src", // This tells Vite to look inside the src/ folder for index.html
    base: "/personal-ps2-portfolio/", // GitHub Pages expects this base path
    build: {
      outDir: "../dist", // Moves dist to the project root, NOT inside src/
    },
    define: {
      "import.meta.env.VITE_EMAILJS_PUBLIC_KEY": JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY),
      "import.meta.env.VITE_EMAILJS_SERVICE_ID": JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
      "import.meta.env.VITE_EMAILJS_TEMPLATE_ID": JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID),
    },
  };
});
