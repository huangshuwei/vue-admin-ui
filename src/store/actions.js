// 公共 action
import * as types from './types'

import {getMenuInfo} from  '../service/api/common'

export default {
    // 左侧菜单展开折叠
    switchLeftBar(context) {

        context.commit(types.SWITCH_LEFT_BAR, {});
    },

    // 获取菜单信息
    getMenuInfo(context){

        return new Promise((resolve, reject) => {

            getMenuInfo().then(()=>{

                resolve();
            }).catch(error=>{

                reject(error)
            })
        })
    },

    // 预览
    preview() {

        return new Promise((resolve, reject) => {


        })
    }
}