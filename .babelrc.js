module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    'inline-react-svg',
    '@babel/plugin-transform-react-jsx',
    [
      'transform-define',
      {
        FORM_ENDPOINT: process.env.FORM_ENDPOINT,
      },
    ],
  ],
};
