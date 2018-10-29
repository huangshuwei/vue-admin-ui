// 公共 action
import * as types from './types'

export default {
    // 左侧菜单展开折叠
    switchLeftBar(context) {

        context.commit(types.SWITCH_LEFT_BAR, {});
    },

    // 预览
    preview() {

        return new Promise((resolve, reject) => {


        })
    }
}