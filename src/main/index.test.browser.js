// traverse all test files for webpack dependency resolution
const testsContext = require.context('./', true, /test\.browser\.js$/);
testsContext.keys().forEach(testsContext);
