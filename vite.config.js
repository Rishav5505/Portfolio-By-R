import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'icon-512.png', 'robots.txt'],
      manifest: {
        name: 'Rishav Kumar | Portfolio',
        short_name: 'RishavPort',
        description: 'Explore Rishav Kumar\'s developer portfolio and projects.',
        theme_color: '#03040c',
        background_color: '#03040c',
        display: 'standalone',
        icons: [
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
