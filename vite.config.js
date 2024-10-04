import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'env');
  const htmlPlugin = () => {
    return {
      name: 'html-transform',
      // Replace %VITE_X% env variables in index.html.
      transformIndexHtml(html: string) {
        return html.replace(/%(.*?)%/g, function match(_match, p1) {
          return env[p1];
        });
      },
    };
  };

  return {
    resolve: {
      alias: {
        'react/jsx-runtime': 'react/jsx-runtime.js',
      },
    },
    define: {
      'process.env': process.env,
    },
    build: {
      outDir: './build',
      rollupOptions: {
        plugins: [commonjs()],
      },
      commonjsOptions: {
        exclude: [/./],
      },
    },
    publicDir: './public',
    plugins: [htmlPlugin(), react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: false }],
          'babel-plugin-transform-typescript-metadata',
          'babel-plugin-parameter-decorator',
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
        ]
      },
    })],
    server: {
      fs: {
        // Allow serving files from workspace root, the fonts are for some reason fetched from there!
        allow: ['../..'],
      },
    },
  };
});
