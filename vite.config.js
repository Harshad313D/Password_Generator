import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/password_generator/', // Replace 'your-repo' with your GitHub repository name
})


