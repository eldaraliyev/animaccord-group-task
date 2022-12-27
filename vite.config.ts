import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/animaccord-group-task/",
  server: {
    host: true,
    port: 8800
  },
  plugins: [vue()],

})
