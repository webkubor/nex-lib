import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dirname } from 'path';
const aliases = {
    resolve: [
      // 设置别名
      ['@', dirname + '/src'],
    ],
  };

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/web-tools.js',
    format: 'umd',
    name: 'WebTools',
  },
  plugins: [
    resolve({
        alias: aliases.resolve,
      }),
    commonjs(),
    typescript(),
  ],
};