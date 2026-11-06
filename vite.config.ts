import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const base = env.VITE_BASE_PATH || '/'
  if (
    !base.startsWith('/') ||
    !base.endsWith('/') ||
    base.includes('//') ||
    /[?#]/.test(base)
  )
    throw new Error('VITE_BASE_PATH must start and end with /')
  return {
    base,
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    plugins: [react()],
  }
})
