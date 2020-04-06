import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactStaticSiteHydrater from 'react-static-site-hydrater';
import { resolve, join } from 'path';

import App from './src/app';

module.exports = {
  entry: resolve(__dirname, './src'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'default.html',
      scriptLoading: 'defer',
    }),
    new ReactStaticSiteHydrater({
      routes: ['/', '/about', '/ro', '/ro/despre'],
      component: App,
      baseFilename: 'default.html',
    }),
  ],
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'default.html',
    },
  },
};
