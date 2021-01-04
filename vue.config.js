const StyleLintWebpackPlugin = require("stylelint-webpack-plugin");

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(
      new StyleLintWebpackPlugin({files: ["**/*.vue", "**/*.less"]})
    )
  
  },
     css: {
    loaderOptions: {
        less: {
           // javascriptEnabled: true // old solution
           // HERE is the difference!
            lessOptions: {
                javascriptEnabled: true
            }
        }
    }
},
};
