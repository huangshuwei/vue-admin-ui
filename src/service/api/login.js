import axiosRequest from '../../plugins/axios'
import config from '../../config/api.config'





// get article list
export function getExampleInfo() {

    return axiosRequest({
        url: `${config.apiUrl.example}/home/getjson`,
        method: 'get',
        params: {
            name:'11111'
        }
    })
}



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