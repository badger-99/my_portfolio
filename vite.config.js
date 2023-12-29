import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  };

  // We have a conditional config based on our Vite command
  // so that when we are running 'npm run dev',
  // the page will start serving on path http://localhost:5173/
  // instead of http://localhost:5173/my_portfolio/

  if (command !== 'serve') {
    config.base = '/my_portfolio/';
  }

  return config;
});
