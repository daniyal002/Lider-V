import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path"; // Импорт функции resolve из модуля path

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.jsx"),
        // Добавьте сюда другие точки входа, если они есть
      },
    },
  },
});
