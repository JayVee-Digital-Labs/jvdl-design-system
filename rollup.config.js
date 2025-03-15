import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import url from '@rollup/plugin-url';
import dts from 'rollup-plugin-dts';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -- 1) Main config: builds .js/.cjs/.esm bundles.
const baseConfig = {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs', format: 'cjs', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
    }),
    resolve(),
    commonjs(),
    url({
      include: ['**/*.svg'],
      limit: 8192
    }),
    postcss({
      extensions: ['.scss'],
      use: [['sass', { includePaths: ['src/styles'] }]],
      extract: 'index.css'
    }),
    terser(),
    typescript({
      tsconfig: './tsconfig.build.json'
    })
  ]
};

// -- 2) DTS config: rewrites imports plus excludes .scss
const dtsConfig = {
  input: 'dist/types/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [
    dts({
      exclude: ['**/*.scss', '**/*.css'],
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@/*': ['src/*']
        },
        skipLibCheck: true
      }
    })
  ]
};

export default [baseConfig, dtsConfig];
