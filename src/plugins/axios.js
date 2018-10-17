/*
* dependence on https://github.com/axios/axios
* */

import axios from 'axios'

import apiConfig from '../config/api.config'

import responseFormatter from '../service/response/response-formatter'

const service = axios.create({

    // 不要设置此属性，很多接口地址不一样，在api层传入
    //baseURL:

    timeout: apiConfig.serveTimeOut
});


// request interceptor
service.interceptors.request.use(request => {

    /*// 每个请求带上 token
    let token = getToken();

    if (token && token.length > 0){

        request.headers['Auth-Token'] = token;
    }*/

    let authInfo =apiConfig.getAuthInfo(request.url);

    // 网关鉴权
    if (authInfo){

        if (authInfo.appid){

            request.headers['appid'] = authInfo.appid;
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
        if (result.code === 200){

            return result;
        }else{

            return Promise.reject(result);
        }
    },
    error => {

        let result = responseFormatter(2, null, error);
        return Promise.reject(result);
    }
)
export default service
