const path = require('path');
const remapIstanbul = require('remap-istanbul');

const sources = [
  path.join(__dirname, 'coverage', 'browser', 'coverage-final.json'),
  path.join(__dirname, 'coverage', 'node', 'coverage.raw.json')
];

const reports = {
  html: path.join(__dirname, 'coverage', 'report', 'bundle')
};

remapIstanbul(sources, reports);

