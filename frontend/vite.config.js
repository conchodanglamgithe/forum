import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '/',
        replacement: path.resolve(__dirname),
      },
    ],
  },

  plugins: [react()],
})
