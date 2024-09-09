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
  input: 'index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js', // 打包后的 CommonJS 文件
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/bundle.esm.js', // 打包后的 ES module 文件
      format: 'esm',
      sourcemap: true
    }
  ],
  external: ['dependencies'], // 这里排除外部依赖包
  plugins: [
    resolve({
        alias: aliases.resolve,
      }),
    commonjs(),
    typescript(),
  ],
};