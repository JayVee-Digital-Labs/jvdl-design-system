import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import url from '@rollup/plugin-url';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.js', format: 'cjs', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
  ],
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    }),
    resolve(),
    typescript({
      tsconfig: './tsconfig.build.json'
    }),
    commonjs(),
    url({
      include: ['**/*.svg'],
      limit: 0,
    }),
    postcss({
      extensions: ['.scss'],
      use: [['sass', { includePaths: ['src/styles'] }]],
      extract: 'index.css'
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};

export default config;