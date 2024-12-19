import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';

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

export default {
  input: 'src/ha-air-purifier-card.ts',
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: 'ha-air-purifier-card.js',
  },
  plugins: [
    resolve(),
    typescript({
      declaration: true,
      declarationDir: 'dist',
    }),
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
  ],
};
