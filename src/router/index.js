import Vue from "vue";
import VueRouter from "vue-router";


// 包含左侧菜单的布局
const leftMenuLayout = r => require.ensure([], () => r(require('../views/_layout/left-menu-layout/index')), 'left-menu-layout');



// 系统介绍
const intro = r => require.ensure([], () => r(require('../views/intro/index.vue')), 'intro');


/*
* 系统管理
*/

// 01 系统设置 system-setting
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
        {path: '/intro', component: intro, name: '首页', meta: {isHomePage: true}},
        {path: '/system-setting', component: leftMenuLayout, name: '系统设置',
            children:[
                { path: '', component: department , name: '部门维护'},
                { path: 'department', component: department , name: '部门维护'},
                { path: 'module', component: module , name: '模块维护'},
                { path: 'position', component: position , name: '岗位维护'},
                { path: 'role', component: role , name: '角色维护'},
            ]
        },
        /*  {
              path: '*', component: {
              template: '<div>抱歉，没有您要的页面。</div>'
               }
          }*/
    ]
})