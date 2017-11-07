// 公共 action
import * as types from './types'


export default {
    // 左侧菜单展开折叠
    switchLeftBar(context,payLoad){

        context.commit(types.SWITCH_LEFT_BAR,{});
    },

    // 设置面包屑
    setCrumbsInfoList(context,payload){

        context.commit(types.SET_CRUMBS_INFO_LIST,payload);
    }
}