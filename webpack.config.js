const path = require('path');

module.exports = {
  mode: 'development',
  externals: {
    fs: "require('fs')",
    readline: "require('readline')",
  },
  entry: './index.ts',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /readlineWrapper\.js$/,
        use: 'raw-loader',
      },
      {
        test: /process\.js$/,
        use: 'raw-loader',
      }
    ],
  },
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist', // Directorio base para el servidor de desarrollo
  },
};
