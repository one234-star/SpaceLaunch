import { build } from 'esbuild';
import { polyfillNode } from 'esbuild-plugin-polyfill-node';

await build({
  entryPoints: ['node_modules/@ardrive/turbo-sdk/lib/esm/web/index.js'],
  bundle: true,
  minify: true,
  platform: 'browser',
  target: ['esnext'],
  format: 'esm',
  plugins: [
    polyfillNode({
      polyfills: {
        crypto: true,
        buffer: true,
        fs: true,
        'fs/promises': true,
      },
    }),
  ],
  external: ['commander', 'cli-progress', 'x402-fetch'],
  outfile: 'turbo-sdk.js',
});
console.log('Built local Turbo browser bundle.');
