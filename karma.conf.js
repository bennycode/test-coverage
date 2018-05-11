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
    coverageReporter: {
      reporters: [
        {
          dir: 'coverage/browser',
          type: 'html',
        },
        {
          dir: 'coverage/browser',
          type: 'json',
        },
        {
          dir: 'coverage/browser',
          type: 'text',
        }
      ],
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
    reporters: ['progress', 'coverage'],
    singleRun: true,
  });
};
