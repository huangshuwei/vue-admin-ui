import Vue from "vue";
import VueRouter from "vue-router";

/*
* base route
* */
// 401 无权限访问
const noPermission = r => require.ensure([], () => r(require('../../views/common/401.vue')), 'no-permission');
// 404 找不到页面
const notFound = r => require.ensure([], () => r(require('../../views/common/404.vue')), 'not-found');


Vue.use(VueRouter)


export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/401', component: noPermission, name: '无权访问'},
        {path: '/404', component: notFound, name: '找不到页面'},
       /* {
            path: '*', redirect: '/404'
        }*/
    ]
})
