// 公共的 mustaions

import * as types from './types'

export default {
    // 获取基金基础信息
    [types.SWITCH_LEFT_BAR] (state,payload) {

        state.root.isExpand = !state.root.isExpand;
    }
}