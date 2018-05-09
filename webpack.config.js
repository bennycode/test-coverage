const pkg = require('./package.json');
const projectName = pkg.name;

module.exports = {
  devtool: 'source-map',
  entry: './src/main',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  output: {
    filename: `${projectName}.bundle.js`,
    library: 'MyLibrary',
    path: `${__dirname}/dist/browser`,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts']
  },
};
