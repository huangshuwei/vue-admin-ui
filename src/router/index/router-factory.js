/*
* 菜单集合
* */
const ROUTES = {

    // 包含左侧菜单的布局
    leftMenuLayout: r => require.ensure([], () => r(require('../../views/_layout/left-menu-layout/index')), 'left-menu-layout'),
    // 空布局
    emptyLayout: r => require.ensure([], () => r(require('../../views/_layout/empty-layout/index')), 'empty-layout'),

    /*
    * 系统管理
    */

    // 01 系统设置 system-setting
    // 部门设置
    department: r => require.ensure([], () => r(require('../../views/system-management/system-setting/department/index.vue')), 'department'),
    // 模块设置
    module: r => require.ensure([], () => r(require('../../views/system-management/system-setting/module/index.vue')), 'module'),
    // 岗位设置
    position: r => require.ensure([], () => r(require('../../views/system-management/system-setting/position/index.vue')), 'position'),
    // 角色设置
    role: r => require.ensure([], () => r(require('../../views/system-management/system-setting/role/index.vue')), 'role'),

    /*
    * 员工管理
    * */
    employee: r => require.ensure([], () => r(require('../../views/employee/user/index.vue')), 'employee')
}


/**
 *
 * @desc 创建路由对象（顶级以上的菜单使用空模板）
 * @param {Array} routeDest 路由目标数据
 * @param {Array} routeSource 路由源数据
 * @param {Object} tempData 递归时需要用到的临时数据
 */
const createRouteObj = (routeSource, tempData) => {

    let routeItem = {},
        routeItemChildren;

    // 有孩子节点
    if (routeSource.children.length > 0) {

        // 顶级菜单
        if (routeSource.parentId === 0) {

            routeItem = {

                path: `/${routeSource.url}`,
                component: ROUTES.leftMenuLayout,
                redirect: `/${routeSource.url}/${routeSource.children[0].url}`,
                name: routeSource.name,
                children: []
            }

            tempData.redirectUrl = routeItem.redirect


        } else { // 非顶级菜单 && 非末级菜单

            routeItem = {

                path: routeSource.url,
                component: ROUTES.emptyLayout,
                redirect: `${tempData.redirectUrl}/${routeSource.children[0].url}`,
                name: routeSource.name,
                children: []
            }

            tempData.redirectUrl = routeItem.redirect
        }

        routeItemChildren = routeSource.children.map(_routeSource => {

            return createRouteObj(_routeSource, tempData)
        })

        routeItem.children = routeItemChildren // 注意这里
    } else {

        // 末级菜单
        routeItem = {
            path: routeSource.parentId === 0 ? `/${routeSource.url}` : routeSource.url,
            component: ROUTES[routeSource.url],
            name: routeSource.name
        }
    }

    return routeItem;
}


/**
 *
 * @desc 动态添加路由
 * @param {Array} routeSource 路由源数据
 * @return {Array} 返回路由对象
 */
const addDynamicRoutes = (routeSource) => {

    return new Promise(resolve =>{

        let routeDest = [];

        routeSource.forEach((_routeSource, index) => {

            // 默认路由
            if (index === 0) {

                routeDest.push({
                    path: '/',
                    redirect: `/${_routeSource.url}`,
                    name: _routeSource.name
                });
            }

            let routeDestItem = createRouteObj(_routeSource, {redirectUrl: ""})

            routeDest.push(routeDestItem);
        })

        resolve(routeDest)
    })

}

export default {

    addDynamicRoutes
}


/*
export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '', redirect: '/system-manage', name: '系统设置'}, // 默认路由
        {path: '/intro', component: intro, name: '首页', meta: {isHomePage: true}},
        {
            path: '/system-manage', component: leftMenuLayout, redirect: '/system-manage/system-setting', name: '系统管理',
            children: [
                {
                    path: 'system-setting',
                    component: emptyLayout,
                    redirect: '/system-manage/system-setting/department',
                    name: '系统设置',
                    children: [
                        {path: 'department', component: department, name: '部门维护'},
                        {path: 'module', component: module, name: '模块维护'},
                        {path: 'position', component: position, name: '岗位维护'},
                        {path: 'role', component: role, name: '角色维护'},
                    ]
                },
            ]
        },
        {
            path: '*', component: {
                template: '<div>抱歉，没有您要的页面。</div>'
            }
        }
    ]
})*/
