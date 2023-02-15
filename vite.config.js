import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ShakelCoins/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
})
