// 公共 action
import * as types from './types'


export default {
    // 左侧菜单展开折叠
    switchLeftBar(context, payLoad){

        context.commit(types.SWITCH_LEFT_BAR, {});
    },

    // 菜单的选中
    setDefaultMenuKey(context,payLoad){

        context.commit(types.SET_DEFAULT_MENU_KEY, payLoad);
    },

    // 设置面包屑
    setCrumbsInfoList(context, payload){

        context.commit(types.SET_CRUMBS_INFO_LIST, payload);
    },

    // 添加历史记录
    addHistoryTab(context, payload){

        context.commit(types.ADD_HISTORY_TAB, payload);
    },

    // 删除历史记录
    deleteHistoryTabs(context, payload){

        context.commit(types.DELETE_HISTORY_TABS, payload);
    },
}