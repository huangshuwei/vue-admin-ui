/*
* dependence on https://github.com/webmodules/jsonp
* */

const jsonp = require('jsonp');

import apiConfig from '../config/api.config';

import responseFormatter from '../service/response/response-formatter'

/*
*  @param {String} url
 * @param {String} options.callback
 * @param {String} options.prefix
 * @param {String} options.name
 * @param {Number} options.timeout
* */
function request(url, options) {

    if (!options) {
        options = {};
    }

    return new Promise((resolve, reject) => {

        let result;

        jsonp(url, {
                // 指定 callback
                param: options.callback || 'callback',
                prefix: options.prefix,
                name: options.name,
                timeout: options.timeout || apiConfig.serveTimeOut
            },
            (error, response) => {

                result = responseFormatter(1,response,error);

                if (result.code === 200){

                    resolve(result);
                }else{

                    reject(result);
                }
            })
    })
}

export default request;