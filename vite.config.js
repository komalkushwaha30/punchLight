import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Use '/' for root deployment; adjust if deploying to a subpath
  plugins: [react()],
});
