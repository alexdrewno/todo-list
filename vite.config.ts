import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/todo-list/',
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: './src/config/setupTests.ts',
    },
})
