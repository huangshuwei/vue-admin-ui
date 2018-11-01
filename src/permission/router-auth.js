/*
* 使用路由页面的验证（如果是多页应用需要进行拆分）
* */
import store from '@/store'
import * as storeTypes from '../store/types'
import router from '@/router/index/base-router'
import NProgress from 'nprogress'; // Progress 进度条
import {Message} from 'element-ui'
import baseAuth from './base-auth'
import routerFactory from '../router/index/router-factory'

// Progress 进度条 样式
import 'nprogress/nprogress.css';


router.beforeEach((to, from, next) => {

    NProgress.start();

    // 验证是否有权限
    baseAuth().then(()=>{

        // 验证是否有菜单数据
        if (!store.state.root.permission.isRouteLoaded){

           // 验证是否有菜单
           store.dispatch(storeTypes.SET_MENU_INFO).then(menuList => {

               // 动态添加路由
               routerFactory.addDynamicRoutes(menuList).then(routeObj => {

                   store.dispatch(storeTypes.UPDATE_ROUTE_LOAD_INFO).then(()=>{

                       next(); // next 一定要在 router.addRoutes 前执行
                       //this.$router.options.routes.push(routeObj);
                       router.addRoutes(routeObj);
                   })

               }).catch(error => {

                   console.log("addDynamicRoutes error:", error)
               })

           }).catch(error => {

               console.log("getMenuInfo error:", error)
           });

        }
        else{

            // 有权限的登录页直接跳转过去
            next();
        }

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
