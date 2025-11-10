import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'component_library', // A unique name for this remote app
      filename: 'remoteEntry.js', // The manifest file
      exposes: {
        // Expose the component
      },
      shared: ['react', 'react-dom'], // List of shared dependencies
    }),
  ],
  server: {
    // This allows all origins to access the dev server.
    // Perfect for local development.
    cors: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
