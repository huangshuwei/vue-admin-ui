import Vue from "vue";
import VueRouter from "vue-router";

const intro = r => require.ensure([], () => r(require('../components/intro.vue')), 'intro');
const editTable = r => require.ensure([], () => r(require('../components/table/edit-table.vue')), 'editTable');
/*const editTable =  () => import(/!* webpackChunkName: "edit" *!/ '../components/table/edit-table.vue');*/

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/', redirect: '/intro',name:'简介' }, // 默认路由
        { path: '/intro', component: intro,name:'简介' },
        { path: '/editTable', component: editTable,name:'表格控件' },

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