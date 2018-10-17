const path = require("path");
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const npmEvent = process.env.npm_lifecycle_event;
    /*nodeENV = process.env.NODE_ENV;*/


module.exports = {
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
    lintOnSave: undefined,

    pages: {
        index: {
            // page 的入口
            entry: 'src/index.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        login: {
            // page 的入口
            entry: 'src/login.js',
            // 模板来源
            template: 'public/login.html',
            // 在 dist/index.html 的输出
            filename: 'login.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
        },
    }
}

