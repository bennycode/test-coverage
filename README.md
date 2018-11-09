## `yarn cov:browser`

Uses Karma to run the webpacked Jasmine specs in a browser environment (headless Chrome). It uses [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter) to write a test coverage report into [coverage/browser/html/index.html](./coverage/browser/html/index.html).

**Output**

- MyClass: 88.89%
- [index.html](./coverage/browser/html/index.html)
- [coverage-final.json](./coverage/browser/coverage-final.json)

## `yarn cov:node:cover`

Runs the Jasmine specs and uses Istanbul's `cover` command to report code coverage into [coverage/node/cover/index.html](./coverage/node/cover/index.html).

**Output**

- MyClass: 100%
- [index.html](./coverage/node/cover/index.html)
- [coverage.raw.json](./coverage/node/cover/coverage.raw.json)





