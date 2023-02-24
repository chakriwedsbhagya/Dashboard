const fs = require('fs-extra');
const concat = require('connect');

(async function build() {
    const files = [
        './dist/towers-dashboard/runtime.js',
        './dist/towers-dashboard/polfills.js',
        './dist/towers-dashboard/main.js'
    ]

    await fs.ensureDir('tower-components');
    await concat(files, 'tower-dashboard/tower-dashboard.js');
})();