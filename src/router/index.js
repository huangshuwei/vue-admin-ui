import Vue from "vue";
import VueRouter from "vue-router";


const childRouterTpl = r => require.ensure([], () => r(require('../views/layout/child-route-tpl.vue')), 'childRouterTpl');

const intro = r => require.ensure([], () => r(require('../components/intro.vue')), 'intro');


const editTable = r => require.ensure([], () => r(require('../components/table/edit-table.vue')), 'editTable');
const table1 = r => require.ensure([], () => r(require('../components/table/table1.vue')), 'table1');
const table2 = r => require.ensure([], () => r(require('../components/table/table2.vue')), 'table2');

const test1 = r => require.ensure([], () => r(require('../components/table/test/test1.vue')), 'test1');
const test2 = r => require.ensure([], () => r(require('../components/table/test/test2.vue')), 'test2');


Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/', redirect: '/intro',name:'简介' }, // 默认路由
        { path: '/intro', component: intro,name:'简介' },
        { path: '/components', component: childRouterTpl,name:'表格控件',redirect:'/components/editTable',
            children : [
                {path : 'index', component :childRouterTpl, name : 'index',redirect:'/components/editTable'},
                {path : 'editTable', component :editTable, name : '编辑表格'},
                {path : 'table1', component :table1, name : '表格1'},
                {path : 'table2', component :table2, name : '表格2'},
                {path : 'test', component :childRouterTpl, name : '测试',redirect:'/components/test/test1',
                    children : [
                        {path : 'index', component :childRouterTpl, name : 'index',redirect:'/components/test/test1'},
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