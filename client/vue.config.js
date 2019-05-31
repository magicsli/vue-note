const path = require('path')

module.exports = {
    chainWebpack: function (config) {
        config.resolve.alias
            .set('Css', path.resolve(__dirname, 'src/assets/css'))
            .set('Api', path.resolve(__dirname, 'src/api'))
            .set('Components', path.resolve(__dirname, 'src/components'))
    },
//    devServer:{
//        proxy:{
//            '/localhost':{
//                target:"http://127.0.0.1:3000",
//                changeOrigin: true,
//                pathRewrite: {
//                    "^/localhost":''
//                }
//            }
//        }
//    }
}
