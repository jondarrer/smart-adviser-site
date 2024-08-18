module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    'inline-react-svg',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',

    [
      'file-loader',
      {
        name: '[hash].[ext]',
        extensions: ['png', 'jpg', 'jpeg', 'gif'],
        publicPath: '/images',
        outputPath: '/dist/images',
        context: '',
        limit: 0,
      },
    ],

    [
      'transform-define',
      {
        FORM_ENDPOINT: process.env.FORM_ENDPOINT,
      },
    ],
  ],
};
