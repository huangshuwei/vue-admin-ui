import store from '@/store'
import router from '@/router'
import NProgress from 'nprogress'; // Progress 进度条
import {getToken} from './src/auth' // getToken from cookie
import {Message} from 'element-ui'

// Progress 进度条 样式
import 'nprogress/nprogress.css';


function toLogin(to, next) {

    if (to.path === '/login') {


        next();

    } else {

        next({path: '/login'})
    }
}

router.beforeEach((to, from, next) => {

    NProgress.start();

    const token = getToken();

    /*  if (to.path === '/login') {

          next()

      } else {

          if (token) {


              // 验证权限
              next();

          } else {
              console.log(hasToken)
              next({path: '/login'})
          }
      }
      return false;*/

    if (token) {

        // get user info
        store.dispatch('login/getUserInfo', {token}).then(() => {

            // 有权限的登录页直接跳转过去
            if (to.path === '/login') {

                next({path: '/'})

            } else {

                next();
            }

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