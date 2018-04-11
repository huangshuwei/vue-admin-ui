import Vue from "vue";
import VueRouter from "vue-router";

// Layout
const layoutMain = r => require.ensure([], () => r(require('../views/layout-main/index.vue')), 'layoutMain');
const layoutChild = r => require.ensure([], () => r(require('../views/layout-child/index.vue')), 'layoutChild');

// login
const login = r => require.ensure([], () => r(require('../views/login/index.vue')), 'login');

// comps
const intro = r => require.ensure([], () => r(require('../components/intro.vue')), 'intro');
const settings = r => require.ensure([], () => r(require('../components/settings.vue')), 'settings');

const table = r => require.ensure([], () => r(require('../components/comps/table.vue')), 'table');
/*const table1 = r => require.ensure([], () => r(require('../components/comps/tables/table1.vue')), 'table1');
const table2 = r => require.ensure([], () => r(require('../components/comps/tables/table2.vue')), 'table2');*/

const test1 = r => require.ensure([], () => r(require('../components/comps/test/test1.vue')), 'test1');
const test2 = r => require.ensure([], () => r(require('../components/comps/test/test2.vue')), 'test2');


Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        //{path: '', redirect: '/intro/index', name: '简介'}, // 默认路由
        {path: '/login', component: login, name: '登录'}, // 登录
        {
            path: '', component: layoutMain,redirect: '/intro', children: [
                {path: 'intro', component: intro, name: '首页',meta: { isHomePage: true }}
            ]
        },
        {
            path: '/settings', component: layoutMain,redirect: '/settings/index', children: [
                {path: 'index', component: settings, name: '设置'}
            ]
        },
        {
            path: '/components', component: layoutMain, name: '组件', redirect: '/components/table',
            children: [
                {path: 'table', component: table, name: '表格'},
                /*         {path : 'table1', component :table1, name : '表格1'},
                         {path : 'table2', component :table2, name : '表格2'},*/
                {
                    path: 'test', component: layoutChild, name: '测试', redirect: '/components/test/test1',
                    children: [
                        {path: 'test1', component: test1, name: 'test1'},
                        {path: 'test2', component: test2, name: 'test2'},
                    ]
                },
            ]
        },

        {
            path: '*',
            redirect: '/intro'
        }
        /*  {
              path: '*', component: {
              template: '<div>抱歉，没有您要的页面。</div>'
               }
          }*/
    ]
})