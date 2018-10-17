/*
* NODE_ENV
* 1、production
* 2、development
* 3、test
* */

const NODE_ENV = process.env.NODE_ENV,
    EVENT_TARGET = process.env.npm_lifecycle_event;

// getBaseUrl
function getBaseUrl() {

    let baseUrl = '';


    switch (NODE_ENV) {

        case 'development': {
            baseUrl = '';
        }
            break;
        case 'production': {

            if (EVENT_TARGET === 'build:prev') {
                baseUrl = '';
            } else if (EVENT_TARGET === 'build' || EVENT_TARGET === 'build:report') {
                baseUrl = '/dataCenter/';
            }
        }
            break;
    }

    return baseUrl;
}

const config = {
    // webpack assets reference path . such as: http://www.eastmoney.com/child-path/
    baseUrl: getBaseUrl()
}

module.exports = config;