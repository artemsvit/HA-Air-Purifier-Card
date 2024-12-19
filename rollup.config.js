import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import serve from 'rollup-plugin-serve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const plugins = [
  resolve(),
  commonjs(),
  typescript(),
  json(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  !dev && terser({
    format: {
      comments: false,
    },
  }),
  dev && serve(serveopts),
].filter(Boolean);

export default {
  input: 'src/ha-air-purifier-card.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    inlineDynamicImports: true,
  },
  plugins,
  external: [
    'lit',
    'lit/decorators.js',
    'custom-card-helpers',
    '@mdi/js',
    'home-assistant-js-websocket',
  ],
};
