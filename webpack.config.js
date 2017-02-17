module.exports = {
  entry: './src',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader:'babel-loader',
        include:__dirname + '/src',
      },
      {
        test:/\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname +'/src'
      }
    ],
  }
};
