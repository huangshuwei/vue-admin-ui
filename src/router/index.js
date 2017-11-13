import Vue from "vue";
import VueRouter from "vue-router";


const childRouterTpl = r => require.ensure([], () => r(require('../views/layout/child-route-tpl.vue')), 'childRouterTpl');


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
        { path: '/', redirect: '/intro',name:'简介' }, // 默认路由
        { path: '/intro', component: intro,name:'简介' },
        { path: '/settings', component: settings,name:'设置' },
        { path: '/components', component: childRouterTpl,name:'表格控件',redirect:'/components/table',
            children : [
                {path : 'table', component :table, name : '表格'},
       /*         {path : 'table1', component :table1, name : '表格1'},
                {path : 'table2', component :table2, name : '表格2'},*/
                {path : 'test', component :childRouterTpl, name : '测试',redirect:'/components/test/test1',
                    children : [
                        {path : 'test1', component :test1, name : 'test1'},
                        {path : 'test2', component :test2, name : 'test2'},
                    ]
                },
            ] },

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