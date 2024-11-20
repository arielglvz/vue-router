// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false' // Set to 'true' for detailed mismatch info
      })
    ]
  }
};
