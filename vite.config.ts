import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

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
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png'],
        manifest: {
          name: 'Dmitry Shamal — CV',
          short_name: 'DS / CV',
          description: 'Senior Frontend Developer',
          theme_color: '#f7f7f2',
          background_color: '#f7f7f2',
          display: 'standalone',
          start_url: base,
          icons: [
            { src: `${base}icon-192.png`, sizes: '192x192', type: 'image/png' },
            {
              src: `${base}icon-512.png`,
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,jpg}'],
        },
      }),
    ],
  }
})
