module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    hot: true,
    port: 8000,
    historyApiFallback: true,
  },
};
