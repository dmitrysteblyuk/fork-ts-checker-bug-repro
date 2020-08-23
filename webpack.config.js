const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: require.resolve('./src/index.ts'),
  output: {
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ]
};
