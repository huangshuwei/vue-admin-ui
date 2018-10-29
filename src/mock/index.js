import Mock from 'mockjs'

import apiStart from './api-start'
import login from './login'


Mock.mock(/\/apis.json/, 'get', apiStart.getApis)

// 登录相关
Mock.mock(/\/auth\/login/, 'post', login.login)

Mock.mock(/\/login\/getUserInfo/, 'get', login.getUserInfo)

export default Mock

