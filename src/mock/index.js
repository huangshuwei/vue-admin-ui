import Mock from 'mockjs'

import login from './login'

// 登录相关
Mock.mock(/\/login\/login/, 'post', login.login)

//http://localhost:8018/src/1/login/login
/*Mock.mock('http://localhost:8018/src/1/login/login', 'post', login.login)*/

export default Mock





/*
import axios from 'axios'
axios.post('http://localhost:8018/src/1/login/login', {
    account: 'Fred',
    password: '123'
})
.then(function (response) {
    //console.log(response);
})
.catch(function (error) {
    //console.log(error);
});

alert(2)*/
