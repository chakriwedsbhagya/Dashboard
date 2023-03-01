const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/towers-dashboard/runtime.js',
    './dist/towers-dashboard/polyfills.js',
    './dist/towers-dashboard/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/card-element.js');
})();