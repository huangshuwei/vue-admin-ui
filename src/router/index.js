import Vue from "vue";
import VueRouter from "vue-router";

// 示例
const example = r => require.ensure([], () => r(require('../views/example/index.vue')), 'example');
// comps
const intro = r => require.ensure([], () => r(require('../views/intro/index.vue')), 'intro');

/*
* 权限管理
* */




Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '', redirect: '/intro', name: '简介'}, // 默认路由
        {path: '/intro', component: intro, name: '首页', meta: {isHomePage: true}},
        {path: '/example', component: example, name: '示例'}
        /*  {
              path: '*', component: {
              template: '<div>抱歉，没有您要的页面。</div>'
               }
          }*/
    ]
})