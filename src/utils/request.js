import axios from 'axios'
import {Message} from 'element-ui'

import {getToken} from "./auth"
import serviceUrl from './serviceUrl'


const service = axios.create({
    baseURL: serviceUrl.BASE_API, // 服务正式地址
    timeout: 5000
})

// request interceptor
service.interceptors.request.use(config => {

    // 每个请求带上 token
    let token = getToken();

    if (token && token.length > 0){

        config.headers['Auth-Token'] = token;
    }

    return config;
}, error => {

    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(
    response => response,

    error => {
        console.log('error:'+error)

        Message({
            message:error.message,
            type:'error',
            duration:5*1000
        })
        return Promise.reject(error)
    }
)
export default service
