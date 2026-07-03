import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Garante uma única instância de React/React-DOM no dev (evita
  // "Invalid hook call" quando o motion é pré-bundlado pelo esbuild).
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  },
})
