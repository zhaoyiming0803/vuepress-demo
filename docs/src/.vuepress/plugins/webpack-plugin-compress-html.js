const { minify } = require('html-minifier-terser')

// webpack compilation 只能访问 js、css、img 等 assets 文件，无法访问到 html

class CompressHtmlWebpackPlugin {
  apply (compiler) {
    compiler.hooks.emit.tap('CompressHtmlWebpackPlugin', compilation => {
      return console.log(compilation)
      Object.keys(compilation.assets).forEach(key => {
        console.log(key)
      })
    })
  }
}

module.exports = function compressHtml (options, ctx) {
  return {
    extendPageData ($page) {
      console.log($page)
    },
    ready () {
      // console.log(ctx)
    },
    chainWebpack (config, isServer) {
      config.plugin('compressHtml').use(CompressHtmlWebpackPlugin)
    }
  }
}
