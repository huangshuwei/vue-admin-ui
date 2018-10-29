/*
* 开发时：
* 1、不支持跨域则需要webpack 配置代理
* 2、支持jsonp则直接请求
* */
let apiUrls = {},
    apiUrlsCache = {};

/**
 * @initApiInfo
 * @desc 初始化 api 信息
 */
function initApiInfo(data) {

    apiUrls = data;
}

/**
 * @getApiUrl
 * @desc 获取 api url 集合
 */
function getApiUrl() {

    let nodeEnv = process.env.NODE_ENV;

    if (nodeEnv !== 'development' && nodeEnv !== 'production') {
        console.error(`process.env.NODE_ENV is ${nodeEnv}, not 'development' or 'production'.`);
    }

    if (Object.keys(apiUrlsCache).length > 0){

        return apiUrlsCache;
    }

    Object.keys(apiUrls).forEach(key => {

        // 支持跨域 如 jsonp/cors
        if (apiUrls[key].supportCrossDomain) {

            apiUrlsCache[key] = apiUrls[key].apiUrl;
        } else { // 不支持跨域

            if (nodeEnv === 'development') {

                apiUrlsCache[key] = apiUrls[key].proxyFlag;

            }else if(nodeEnv === 'production'){

                console.error(`${nodeEnv} mod must support cross domain!`)
            }
        }
    })

    return apiUrlsCache;
}

// 获取验证信息
function getAuthInfo(url) {

    let result = null;

    if (!url) {
        return result;
    }

    Object.keys(apiUrls).forEach(key => {

        if (url.indexOf(apiUrls[key].apiUrl) === 0 && apiUrls[key].auth && apiUrls[key].auth.isAuth) {

            return apiUrls[key].auth;
        }
    })

    return result;
}

const config = {
    // api url
    initApiInfo:initApiInfo,
    getApiUrl:getApiUrl,
    serveTimeOut: 30000, // 超时时间
    getAuthInfo: getAuthInfo
}

export default config
