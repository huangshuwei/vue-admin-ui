const path = require("path");
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const npmEvent = process.env.npm_lifecycle_event;
    /*nodeENV = process.env.NODE_ENV;*/


module.exports = {
    // webpack assets reference path . such as: http://www.eastmoney.com/child-path/
    baseUrl: '',

    devServer: {
        proxy: {
            // 通用代理 占位
            '/commonApi': {
                target: 'http://...',
                pathRewrite: {'^/commonApi': ''}
            },

            // 示例代理
            '/exampleApi': {
                target: 'http://172.16.50.24:8002/',
                pathRewrite: {'^/exampleApi': ''}
            }
        }
    },

    chainWebpack: config => {

        // 移除 prefetch 插件
        config.plugins.delete('prefetch'),

        config.resolve.alias
            .set('@', path.resolve('./src'));

    },


    configureWebpack: {
        plugins: [
            new OpenBrowserPlugin({url: 'http://localhost:8080'}),
            new BundleAnalyzerPlugin({analyzerMode: npmEvent === 'build:report' ? 'server' : 'disabled'}),
            new webpack.ProvidePlugin({
                /*   Utils:'Utils'*/
            }),
        ]
    },

    productionSourceMap: true,

    /*
    * When set to true, eslint-loader will only emit warnings during webpack's compilation process in order not to break the flow during development.
    * If you want it to emit errors instead (i.e. when building for production), set it like this: lintOnSave: 'error'
    */
    lintOnSave: undefined
}

