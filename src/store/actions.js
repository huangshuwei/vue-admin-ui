// 公共 action
import * as types from './types'

import {getMenuInfo} from  '../service/api/common'


import listToTree from '../utils/array/listToTree'

export default {
    // 左侧菜单展开折叠
    switchLeftBar(context) {

        context.commit(types.SWITCH_LEFT_BAR, {});
    },

    // 获取菜单信息
    getMenuInfo(context){

        return new Promise((resolve, reject) => {

            getMenuInfo().then((res)=>{

                if (res.data && Array.isArray(res.data.data) && res.data.data.length > 0){

                    let menuList = listToTree(res.data.data, {
                        idKey: 'id',
                        parentKey: 'parentId',
                        childrenKey: 'children'
                    });

                    context.commit(types.SET_MENU_INFO, menuList);

                    resolve(menuList);

                }else{

                    reject(res)
                }
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