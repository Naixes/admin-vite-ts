import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 安装@types/node
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: ''
      }
    }
  }
})
