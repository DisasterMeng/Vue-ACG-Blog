
// const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'http://img.cdn.myrove.cn/blog/' : '/',
  lintOnSave: false,
  productionSourceMap: false
  // configureWebpack:config =>{
  //     if(process.env.NODE_ENV === 'production'){
  //         return {
  //             plugins:[new CompressionPlugin({
  //                 test:/\.js$|\.html$|\.css/,
  //                 threshold:10240,
  //                 deleteOriginalAssets:true
  //             })]
  //         }
  //     }
  // }
}
