/*
* author:github.com/huangshuwei
* create date:2018-7-3
* modify date:2018-7-9
*/

import getCodeInfo from './response-codes'


/**
 * @formatter
 * @desc 格式化响应数据
 * @param {number} type=1 - jsonp 响应； type=2 - axios 响应
 * @param {object} response - 响应结果
 */
function responseFormatter(type, response, error) {

    let result;

    // jsonp
    if (type === 1) {

        result = {
            data: null,
            code: -1,
            codeMessage: '',
            dataType: 'json', // 默认json
            requestType: 'jsonp' // 请求类型 get、post、put、option、delete、jsonp
        }

        if (error) {

            if (error.message === 'Timeout') {

                result.code = 408;
                result.codeMessage = getCodeInfo(result.code).codeMessage;

            } else {

                result.code = 500;
                result.codeMessage = getCodeInfo(result.code).codeMessage;
            }
        }else if (response) {

            result.code = 200;
            result.codeMessage = getCodeInfo(result.code).codeMessage;
            result.data = response;

        } else {

            result.code = 204;
            result.codeMessage = getCodeInfo(result.code).codeMessage;
        }

    } else if (type === 2) {// axios

        if (error) {

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                result = error.response;

                if (result.status === 404 || result.status === 401){

                    result.code = result.status;
                }else{
                    result.code = 500;
                }

                result.codeMessage = getCodeInfo(result.code).codeMessage;

            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                result = error.request;

                // fixed timeout
                if (error.message && error.message.includes("timeout")){

                    result.code = 408;
                }else{

                    result.code = 204;
                }

                result.codeMessage = getCodeInfo(result.code).codeMessage;

            } else {
                // Something happened in setting up the request that triggered an Error
                result = {};
                result.code = 0;
                result.codeMessage = getCodeInfo(result.code).codeMessage;
            }
        }

        if (response) {

            result = response;
            result.code = 200;
            result.codeMessage = getCodeInfo(result.code).codeMessage;
        }
    }
    return result;
}


export default responseFormatter;