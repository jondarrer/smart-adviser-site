import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactStaticSiteHydrater from 'react-static-site-hydrater';
import SitemapPlugin from 'sitemap-webpack-plugin';
import { resolve, join } from 'path';

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
    path: '/about',
    lastmod,
    priority: '0.5',
    changefreq: 'daily',
  },
  {
    path: '/ro',
    lastmod,
    priority: '0.8',
    changefreq: 'daily',
  },
  {
    path: '/ro/despre',
    lastmod: '2020-04-06',
    priority: '0.5',
    changefreq: 'daily',
  },
];

const routes = paths.map((path) => path.path);

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
      routes,
      component: App,
      baseFilename: 'default.html',
    }),
    new SitemapPlugin('https://smartadviser.co.uk', paths),
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
