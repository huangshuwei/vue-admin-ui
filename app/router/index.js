import Vue from "vue";
import VueRouter from "vue-router";

const editTable = r => require.ensure([], () => r(require('../components/table/edit-table.vue')), 'editTable');

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/', redirect: '/editTable' }, // 默认路由
        { path: '/editTable', component: editTable },

        {
            path: '*',
            redirect: '/editTable'
        }
        /*  {
              path: '*', component: {
              template: '<div>抱歉，没有您要的页面。</div>'
               }
          }*/
    ]
})