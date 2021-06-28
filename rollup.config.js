import typescript from '@rollup/plugin-typescript';
import { uglify } from 'rollup-plugin-uglify'
import dts from "rollup-plugin-dts";

const config = [
  {
    input: 'src/ecommerce.ts',
    output: {
      name: 'ecommerce',
      file: 'dist/ecommerce.js',
      format: 'umd',
      compact: true
    },
    plugins: [
      typescript()
      // typescript(),
      // uglify()
    ]
  },
  {
    input: "./build/types/ecommerce.d.ts",
    output: [{ file: "dist/ecommerce.d.ts", format: "es" }],
    plugins: [
      dts()
    ]
  }
];

export default config;
