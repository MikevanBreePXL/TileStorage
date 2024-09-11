import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      server: {
        https: {
          key: './localhost-key.pem', // Path to the key file
          cert: './localhost.pem',    // Path to the certificate file
        }
      },
      devOptions: {
        enabled: true, // Enable the service worker in development mode
      },
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'van Bree Tegels',
        short_name: 'VBTegels',
        description: 'A custom Vue 3 SPA',
        theme_color: '#073077',
        start_url: '/',
        display: 'standalone',
        background_color: '#212121',
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
      },
    }),
  ],
})
