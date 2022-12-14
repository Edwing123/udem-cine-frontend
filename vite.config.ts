import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        https: {
            cert: readFileSync('./certs/udem-cine.com.pem'),
            key: readFileSync('./certs/udem-cine.com-key.pem')
        }
    },
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@config': path.resolve(__dirname, './src/config/'),
            '@typ': path.resolve(__dirname, './src/types/'),
            '@assets': path.resolve(__dirname, './src/assets/'),
            '@utils': path.resolve(__dirname, './src/utils/'),
            '@api': path.resolve(__dirname, './src/api/'),
            '@store': path.resolve(__dirname, './src/store/')
        }
    }
})
