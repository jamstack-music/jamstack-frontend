module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.{js|jsx}$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
