import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
    tsconfigPaths(),
    svgr(),
  ],

  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
});
