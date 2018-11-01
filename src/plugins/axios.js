/*
* dependence on https://github.com/axios/axios
* */

import axios from 'axios'

import apiConfig from '../config/api.config'

import responseFormatter from '../service/response/response-formatter'
import {getToken} from '../permission/src/token'

const service = axios.create({

    // 不要设置此属性，很多接口地址不一样，在api层传入
    //baseURL:

    timeout: apiConfig.serveTimeOut
});


// request interceptor
service.interceptors.request.use(request => {

    let authInfo = apiConfig.getAuthInfo(request.url);

    // 网关鉴权
    if (authInfo) {

        if (authInfo.authKey) {

            request.headers[authInfo.authKey] = getToken();
        }
    }

    return request;
}, error => {

    // Do something with request error
    Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(
    response => {

        let result = responseFormatter(2, response, null);
        if (result.code === 200) {

            return result;
        } else {

            return Promise.reject(result);
        }
    },
    error => {

        let result = responseFormatter(2, null, error);
        return Promise.reject(result);
    }
)
export default service
