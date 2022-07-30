import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@config': path.resolve(__dirname, './src/config/'),
            '@typ': path.resolve(__dirname, './src/types/'),
            '@assets': path.resolve(__dirname, './src/assets/')
        }
    }
})
