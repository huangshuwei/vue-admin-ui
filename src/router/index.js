import Vue from "vue";
import VueRouter from "vue-router";

// 示例
const example = r => require.ensure([], () => r(require('../views/example/index.vue')), 'example');
// comps
const intro = r => require.ensure([], () => r(require('../views/intro/index.vue')), 'intro');


/*
* 系统管理
*/

// 01 系统设置
// 部门设置
const department = r => require.ensure([], () => r(require('../views/system-management/system-setting/department/index.vue')), 'department');
// 模块设置
const module = r => require.ensure([], () => r(require('../views/system-management/system-setting/module/index.vue')), 'module');
// 岗位设置
const position = r => require.ensure([], () => r(require('../views/system-management/system-setting/position/index.vue')), 'position');
// 角色设置
const role = r => require.ensure([], () => r(require('../views/system-management/system-setting/role/index.vue')), 'role');


/*
* 员工管理
* */
const employee = r => require.ensure([], () => r(require('../views/system-management/employee/user/index.vue')), 'employee');



Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '', redirect: '/intro', name: '简介'}, // 默认路由
        /*{path: '/intro', component: intro, name: '首页', meta: {isHomePage: true}},*/
        {path: '/intro', component: intro, name: '首页', meta: {isHomePage: true}},
        /*  {
              path: '*', component: {
              template: '<div>抱歉，没有您要的页面。</div>'
               }
          }*/
    ]
})