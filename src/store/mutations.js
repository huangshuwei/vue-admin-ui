// 公共的 mustaions

import * as types from './types'

export default {
    // 左侧菜单展开折叠
    [types.SWITCH_LEFT_BAR] (state) {

        state.root.isExpand = !state.root.isExpand;
    },

    // 设置菜单信息
    [types.SET_MENU_INFO](state,payload){

        state.root.menuInfo = payload;
    },

    // 修改权限信息
    [types.UPDATE_ROUTE_LOAD_INFO](state){

        state.root.permission.isRouteLoaded = true;
    },
}