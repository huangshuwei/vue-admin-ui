import store from '@/store'
import router from '@/router'
import NProgress from 'nprogress'; // Progress 进度条
import {getToken} from './src/auth' // getToken from cookie
import {Message} from 'element-ui'
import * as identitys from "@/config/identity.config.js"

// Progress 进度条 样式
import 'nprogress/nprogress.css';


function toLogin() {

    window.location.href = identitys.LOGIN_PATH;
}

router.beforeEach((to, from, next) => {

    NProgress.start();

    const token = getToken();


    if (token) {

        // get user info
        store.dispatch('login/getUserInfo', {token}).then(() => {

            // 有权限的登录页直接跳转过去
            next();

        }).catch(err => {
            let msg = err.message;
            msg = err && err.msg;
            Message({
                message: msg,
                type: 'error',
                duration: 5 * 1000
            })

            toLogin(to, next);
        })
    } else {

        toLogin(to, next);
    }
    NProgress.done();
})

router.afterEach(() => {
    NProgress.done(); // 结束Progress
});