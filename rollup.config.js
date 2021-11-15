import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';

const config = [
  {
    input: 'src/ecommerce.ts',
    output: {
      name: 'ecommerce',
      file: 'dist/ecommerce.js',
      format: 'umd',
      compact: true,
    },
    plugins: [
      typescript(),
      terser(),
    ],
  },
  {
    input: './build/types/ecommerce.d.ts',
    output: [{ file: 'dist/ecommerce.d.ts', format: 'es' }],
    plugins: [
      dts(),
    ],
  },
];

export default config;
