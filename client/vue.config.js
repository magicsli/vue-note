const path = require('path')

module.exports = {
    chainWebpack: function (config) {
        config.resolve.alias
            .set('Css', path.resolve(__dirname, 'src/assets/css'))
            .set('Api', path.resolve(__dirname, 'src/api'))
            .set('Components', path.resolve(__dirname, 'src/components'))
    },
   
}
