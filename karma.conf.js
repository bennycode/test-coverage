const path = require('path');

module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: '.',
    browsers: ['ChromeNoSandbox'],
    client: {
      useIframe: false,
    },
    colors: true,
    concurrency: Infinity,
    coverageIstanbulReporter: {
      combineBrowserReports: true,
      dir: path.join(__dirname, 'coverage', 'browser'),
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          subdir: 'html',
        }
      },
      reports: ['html', 'json', 'text'],
      verbose: true,
    },
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--allow-file-access-from-files', '--no-sandbox', '--unlimited-quota-for-files'],
      },
    },
    files: [
      'dist/browser/test-coverage.bundle.js',
      'dist/browser/test-coverage.test.bundle.js'
    ],
    frameworks: ['jasmine'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['progress', 'coverage-istanbul'],
    singleRun: true,
  });
};
