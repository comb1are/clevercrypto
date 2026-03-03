import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://4clever.io',
        changeOrigin: true,
        secure: true,
        cookieDomainRewrite: {
          '.4clever.io': 'localhost',
          '4clever.io': 'localhost'
        },
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
