const pkg = require('./package.json');
const projectName = pkg.name;

module.exports = {
  devtool: 'source-map',
  entry: {
    [`${projectName}.test`]: `${__dirname}/src/main/index.test.browser.js`,
    [projectName]: `${__dirname}/${pkg.main}`,
  },
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    library: 'MyLibrary',
    path: `${__dirname}/dist/browser`,
    publicPath: '/',
  },
};
