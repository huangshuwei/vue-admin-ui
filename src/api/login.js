import request from '../utils/request'

// login
export function login(account,password) {

    return request({
        url:'/login/login',
        method:'post',
        data:{
            account,
            password
        }
    })
}

// logout
export function logout() {
    return request({
        url:'/login/logout',
        methods:'post'
    })
}

// getUserInfo
export function getUserInfo(token) {
    return request({
        url: '/user/info',
        method: 'get',
        params: { token }
    })
}