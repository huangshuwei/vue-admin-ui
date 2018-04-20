import request from '../utils/request'

// login
export function login(userName,password) {

    return request({
        url:'/auth/login',
        method:'post',
        data:{
            userName,
            password
        }
    })
}

// logout
export function logout() {
    return request({
        url:'/login/logout',
        method:'post'
    })
}

// getUserInfo
export function getUserInfo(token) {
    return request({
        url: '/login/getUserInfo',
        method: 'get',
        params: { token }
    })
}