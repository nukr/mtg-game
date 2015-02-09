var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/src/js/boot.js',
  ],
  output: {
    path: __dirname + '/client/build',
    filename: 'bundle.js',
    publicPath: '/client/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.jsx?$/, loaders: ['react-hot', '6to5-loader?experimental&optional=coreAliasing'], exclude: /node_modules/}
    ]
  }
};
