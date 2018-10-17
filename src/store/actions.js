// 公共 action
import * as types from './types'
import {preview} from "./../service/api/common";

export default {
    // 左侧菜单展开折叠
    switchLeftBar(context) {

        context.commit(types.SWITCH_LEFT_BAR, {});
    },

    // 预览
    preview() {

        return new Promise((resolve, reject) => {

            preview().then(res => {

                resolve(res)
            }).catch(error => {
                reject(error);
            })
        })
    }
}