import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vike()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@pages': '/pages',
      '@renderer': '/renderer',
    },
  },
})
