const pkg = require('./package.json');
const projectName = pkg.name;

module.exports = {
  devtool: 'source-map',
  entry: {
    [`${projectName}.test`]: `${__dirname}/src/main/index.test.browser.js`,
    [projectName]: `${__dirname}/src/main`,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.ts$/,
        loader: 'istanbul-instrumenter-loader',
        enforce: 'post',
        exclude: /node_modules/,
      }
    ]
  },
  output: {
    filename: `[name].bundle.js`,
    library: 'MyLibrary',
    path: `${__dirname}/dist/browser`,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts']
  },
};
