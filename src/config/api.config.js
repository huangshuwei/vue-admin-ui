/*
* 开发时：
* 1、不支持跨域则需要webpack 配置代理
* 2、支持jsonp则直接请求
* */
const API_URLS = {

    /* 属性说明：
    * supportCrossDomain - api 是否支持跨域
    * devApiUrl - 测试 api
    * proApiUrl - 正式 api
    * remark - 备注
    * proxyFlag - 代理标识
    */

    // 通用api（指标服务：定报预披、高管持股、年报季报、主力持仓、报告期。。。）
    engine: {
        supportCrossDomain: true,
        devApiUrl: 'http://172.16.60.13:8101/',
        proApiUrl: 'http://172.16.60.13:8101/', // 走数据总线
        remark: '支持cors',
        proxyFlag: '',
        auth: {
            isAuth: false
        }
    }
}

/**
 * @getApiUrl
 * @desc 获取 api url 集合
 */
function getApiUrl() {

    let nodeEnv = process.env.NODE_ENV,
        apiUrl = {};

    if (nodeEnv !== 'development' && nodeEnv !== 'production') {
        console.error(`process.env.NODE_ENV is ${nodeEnv}, not 'development' or 'production'.`);
    }

    for (let urlItem  in API_URLS) {

        if (nodeEnv === 'development') {

            // 支持跨域 如 jsonp/cors
            if (API_URLS[urlItem].supportCrossDomain) {

                apiUrl[urlItem] = API_URLS[urlItem].devApiUrl;
            } else { // 不支持跨域

                apiUrl[urlItem] = API_URLS[urlItem].proxyFlag;
            }

        } else if (nodeEnv === 'production') {

            if (API_URLS[urlItem].proApiUrl && API_URLS[urlItem].proApiUrl.length > 0) {

                apiUrl[urlItem] = API_URLS[urlItem].proApiUrl;
            } else {

                console.error(`API_URLS.${urlItem}.proApiUrl is not provided in API_URLS.${urlItem}.`)
            }
        }
    }

    return apiUrl;
}

// 获取验证信息
function getAuthInfo(url) {

    let result = null;

    if (!url) {
        return result;
    }

    let nodeEnv = process.env.NODE_ENV,tempUrl;


    for (let urlItem  in API_URLS) {

        tempUrl = "";
        tempUrl = nodeEnv === 'development' ? API_URLS[urlItem].devApiUrl : API_URLS[urlItem].proApiUrl;

        if (tempUrl && url.indexOf(tempUrl) === 0 && API_URLS[urlItem].auth && API_URLS[urlItem].auth.isAuth){

            return API_URLS[urlItem].auth;
        }
    }

    return result;
}

/**
 * @getWebpackProxy
 * @desc 获取 webpack 代理配置（不用区分开发环境和线上环境，webpack自动回过滤）
 */
function getWebpackProxy() {

    let proxy = {};

    for (let urlItem  in API_URLS) {

        if (!API_URLS[urlItem].supportCrossDomain) {

            let proxyItemKey = '/' + API_URLS[urlItem].proxyFlag,
                pathRewriteKey = '^' + proxyItemKey;

            if (proxy[proxyItemKey]) {
                console.error(`proxyFlag 属性值重复：${proxyItemKey}`);
            }

            proxy[proxyItemKey] = {};

            proxy[proxyItemKey].target = API_URLS[urlItem].devApiUrl;

            proxy[proxyItemKey].pathRewrite = {};
            proxy[proxyItemKey].pathRewrite[pathRewriteKey] = '';
        }
    }

    return proxy;
}

const config = {
    // api url
    apiUrl: getApiUrl(),
    webpackProxy: getWebpackProxy(),
    serveTimeOut: 30000, // 超时时间
    getAuthInfo: getAuthInfo
}

export default config
