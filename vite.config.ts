import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import postcsspxtoviewport from "postcss-px-to-viewport-ts"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    base: "./",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      host: true,
      port: 3361,
      open: false,
      cors: true,
      proxy: {
        "/api": {
          target: "https://development-service",
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace("/api", "/"),
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: "px",
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false,
            landscapeUnit: "vw",
            landscapeWidth: 568,
          }),
        ],
      },
    },
    build: {
      minify: "esbuild",
      outDir: "dist",
      assetsDir: "assets",
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vandor: ["react"],
          },
        },
      },
    },
    esbuild: {
      drop: env.ENV !== "development" ? ["console", "debugger"] : [],
    },
  }
})
