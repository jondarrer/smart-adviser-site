import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactStaticSiteHydrater from 'react-static-site-hydrater';
import SitemapPlugin from 'sitemap-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';

import App from './src/app';

const pad = (n, width, z) => {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

const today = new Date();
const lastmod = `${pad(today.getFullYear(), 2)}-${pad(
  today.getMonth() + 1,
  2
)}-${pad(today.getDate(), 2)}`;

const paths = [
  {
    path: '/',
    lastmod,
    priority: '0.8',
    changefreq: 'daily',
  },
  {
    path: '/despre',
    lastmod,
    priority: '0.5',
    changefreq: 'daily',
  },
  {
    path: '/en',
    lastmod,
    priority: '0.8',
    changefreq: 'daily',
  },
  {
    path: '/en/about',
    lastmod,
    priority: '0.5',
    changefreq: 'daily',
  },
  {
    path: '/en/attributions',
    lastmod,
    priority: '0.2',
    changefreq: 'daily',
  },
];

// const routes = paths.map((path) => path.path);
const routes = [
  '/v-next',
  '/v-next/despre',
  '/v-next/en',
  '/v-next/en/about',
  '/v-next/en/attributions',
];

module.exports = {
  entry: resolve(__dirname, 'src'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'v-next-bundle.js',
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
    new SitemapPlugin('https://smartadviser.co.uk', paths),
    new FaviconsWebpackPlugin(),
    new ReactStaticSiteHydrater({
      routes,
      component: App,
      baseFilename: 'default.html',
    }),
    new CopyPlugin([
      { from: 'src/images', to: 'images' },
      { from: 'src/fonts', to: 'fonts' },
      { from: 'current', to: '' },
    ]),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'default.html',
    },
  },
};
