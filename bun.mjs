import dts from 'bun-plugin-dts-auto';
import dts from 'bun-plugin-dts';

await Bun.build({
  entrypoints: ['./src/index.ts', './src/other.ts', './dbest-stack/src/routes/api/index.tsx',],
  outdir: './dist',
  plugins: [
    dts({
      withSourceMap: true, // optional
    }),
  ],
})

console.log('Build complete ✅')