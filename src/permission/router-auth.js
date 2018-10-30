/*
* 使用路由页面的验证
* */

import router from '@/router'
import NProgress from 'nprogress'; // Progress 进度条
import {Message} from 'element-ui'
import baseAuth from './base-auth'

// Progress 进度条 样式
import 'nprogress/nprogress.css';


router.beforeEach((to, from, next) => {

    NProgress.start();

    baseAuth().then(()=>{

        // 有权限的登录页直接跳转过去
        next();

    }).catch(err=>{

        let msg = err.message;
        msg = err && err.msg;
        Message({
            message: msg,
            type: 'error',
            duration: 5 * 1000
        })
    })

    NProgress.done();
})

router.afterEach(() => {
    NProgress.done(); // 结束Progress
});
