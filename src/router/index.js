import Vue from "vue";
import VueRouter from "vue-router";

// Layout
const layoutMain = r => require.ensure([], () => r(require('../views/layout/layout-main/index.vue')), 'layoutMain');
/*const layoutChild = r => require.ensure([], () => r(require('../views/layout/layout-child/index.vue')), 'layoutChild');*/

// login
const login = r => require.ensure([], () => r(require('../views/login/index.vue')), 'login');
// 示例
const example = r => require.ensure([], () => r(require('../views/example/index.vue')), 'example');


// comps
const intro = r => require.ensure([], () => r(require('../views/intro/index.vue')), 'intro');


Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        //{path: '', redirect: '/intro/index', name: '简介'}, // 默认路由
        {path: '/login', component: login, name: '登录'}, // 登录
        {
            path: '', component: layoutMain, redirect: '/intro', children: [
                {path: 'intro', component: intro, name: '首页', meta: {isHomePage: true}}
            ]
        },
        {
            path: '/example', component: layoutMain, redirect: '/example/index', children: [
                {path: 'index', component: example, name: '示例'}
            ]
        },
        /*  {
              path: '*', component: {
              template: '<div>抱歉，没有您要的页面。</div>'
               }
          }*/
    ]
})