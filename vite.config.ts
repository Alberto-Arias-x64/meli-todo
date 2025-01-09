import { defineConfig as defineVitestConfig } from 'vitest/config';
import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
const viteConfig = defineConfig({
  plugins: [react()],
})

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
  },
})

export default mergeConfig(viteConfig, vitestConfig);