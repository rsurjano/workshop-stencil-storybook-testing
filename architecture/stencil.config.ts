import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';

import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "architecture",
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer({ cascade: false })]
    })
  ]
};
