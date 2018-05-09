const pkg = require('./package.json');
const projectName = pkg.name;

module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: '',
    browsers: ['ChromeNoSandbox'],
    client: {
      useIframe: false,
    },
    colors: true,
    concurrency: Infinity,
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--allow-file-access-from-files', '--no-sandbox', '--unlimited-quota-for-files'],
      },
    },
    files: [`dist/browser/${projectName}.test.bundle.js`],
    frameworks: ['jasmine'],
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: {
      '**/*.js': ['sourcemap'],
    },
    reporters: ['progress'],
    singleRun: true,
  });
};
