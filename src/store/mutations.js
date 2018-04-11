// 公共的 mustaions

import * as types from './types'

export default {
    // 左侧菜单展开折叠
    [types.SWITCH_LEFT_BAR] (state,payload) {

        state.root.isExpand = !state.root.isExpand;
    },

    // 菜单的选中
    [types.SET_DEFAULT_MENU_KEY](state,payload){

        state.root.defaultMenuKey = payload;
    },

    // 设置面包屑
    [types.SET_CRUMBS_INFO_LIST](state,payload){

        if (Array.isArray(payload) && payload.length > 0){
            state.root.crumbsInfoList = payload;
        }
    },

    // 添加历史记录
    [types.ADD_HISTORY_TAB](state,payload){

        let isExitTab = false;

        let tempTabs = state.root.historyTabs.map(item =>{

            if(item.path === payload.path){

                isExitTab = true;
                return {name : item.name, path : item.path, colorType : ''};

            } else {

                return {name : item.name, path : item.path, colorType : 'info'};
            }
        })

        // 如果不存在相同的历史记录则添加
        if(!isExitTab){

            tempTabs.push({name : payload.name, path : payload.path, colorType : ''});
        }

        state.root.historyTabs = tempTabs;
    },

    // 删除历史记录
    [types.DELETE_HISTORY_TABS](state,payload){

        let index = state.root.historyTabs.findIndex(x=>x.path === payload.path);

        if (index > -1){

            state.root.historyTabs.splice(index,1);
        }
    }
}