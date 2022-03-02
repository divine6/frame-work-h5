
const path = require('path')
const thmem1 = path.join(__dirname,'./src/styles/theme.less')
module.exports = {
  publicPath: './',
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {}
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://106.14.161.98:8088/api',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars:  {
          hack: `true; @import "${thmem1}";`
        }
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': { // 全局引入less 变量
      preProcessor: 'less',
      patterns    : [
        path.resolve(__dirname, './src/styles/variables.less')
      ]
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件 减少降低带宽
    config.plugins.delete('prefetch')
    // 开启eslint 自动修复
    config.module.rule('eslint').use('eslint-loader').options({fix: true});
  }
}

