import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // We'll make a conditional config based on our Vite 'run command
  // so that when we run 'npm run dev', the page will be served
  // from http://localhost:5173/ instead of
  // http://localhost:5173/my_portfolio/
  
  const config = {
    base: '/',
    plugins: [react()],
  };

  if (command !== 'serve') {
    config.base = '/my_portfolio';
  }

  return config;
});
