import Mock from 'mockjs'

import login from './login'

// 登录相关
Mock.mock(/\/auth\/login/, 'post', login.login)

Mock.mock(/\/login\/getUserInfo/, 'get', login.getUserInfo)


export default Mock

