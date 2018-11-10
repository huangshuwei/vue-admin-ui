import Mock from 'mockjs'

// 设置1秒至4秒间响应
Mock.setup({ timeout: '100-600' });

import apiStart from './api-start'
import common from './common'
import department from './department'

import login from './login'

// api start
Mock.mock(/\/apis.json/, 'get', apiStart.getApis)

// common
Mock.mock(/\/system\/common\/GetMenuInfo/, 'get', common.getMenuInfo)

// 部门信息
Mock.mock(/\/system\/common\/GetDepartmentTree/, 'get', department.getDepartmentTree)



// 登录相关
Mock.mock(/\/auth\/login/, 'post', login.login)

Mock.mock(/\/login\/getUserInfo/, 'get', login.getUserInfo)

export default Mock

