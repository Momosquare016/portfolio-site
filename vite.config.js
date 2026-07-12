import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteFont from 'vite-font'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteFont({
      config: [
        {
          name: 'Space Grotesk',
          weight: ['300', '400', '500', '600', '700'],
          subsets: ['latin'], // only the latin files get preloaded (we don't ship cyrillic/greek text)
          fetch: true, // download + self-host, and let the plugin measure it for the CLS fallback
          preload: true, // body copy is above the fold, so start fetching it right away
          display: 'swap', // show fallback text immediately rather than invisible text
          cssVariable: 'space-grotesk', // -> :root { --space-grotesk: 'Space Grotesk', <fallback>, sans-serif }
          fallback: 'sans-serif', // generic family used for metric matching and as the last resort
        },
        // Headings — Sora. Used via the `font-heading` Tailwind utility and the h1–h6 rule in index.css.
        {
          name: 'Sora',
          weight: ['300', '400', '500', '600', '700', '800'],
          subsets: ['latin'],
          fetch: true,
          preload: true, // the hero <h1> on Home.jsx is the largest thing on first paint
          display: 'swap',
          cssVariable: 'sora', // -> :root { --sora: 'Sora', <fallback>, sans-serif }
          fallback: 'sans-serif',
        },
      ],
    }),
  ],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
