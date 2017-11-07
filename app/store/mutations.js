// 公共的 mustaions

import * as types from './types'

export default {
    // 左侧菜单展开折叠
    [types.SWITCH_LEFT_BAR] (state,payload) {

        state.root.isExpand = !state.root.isExpand;
    },

    // 设置面包屑
    [types.SET_CRUMBS_INFO_LIST](state,payload){

        if (Array.isArray(payload) && payload.length > 0){
            state.root.crumbsInfoList = payload;
        }

    }
}