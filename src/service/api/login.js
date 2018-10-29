import axiosRequest from '../../plugins/axios'


// login
export function login(userName,password) {

    return axiosRequest({
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
    return axiosRequest({
        url:'/login/logout',
        method:'post'
    })
}

// getUserInfo
export function getUserInfo(token) {
    return axiosRequest({
        url: '/login/getUserInfo',
        method: 'get',
        params: { token }
    })
}