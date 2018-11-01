// 公共 action
import * as types from './types'

import {getMenuInfo} from  '../service/api/common'


import listToTree from '../utils/array/listToTree'

export default {
    // 左侧菜单展开折叠
    [types.SWITCH_LEFT_BAR](context) {

        context.commit(types.SWITCH_LEFT_BAR, {});
    },

    // 修改路由装载信息
    [types.UPDATE_ROUTE_LOAD_INFO](context){

        context.commit(types.UPDATE_ROUTE_LOAD_INFO)
    },

    // 获取菜单信息
    [types.SET_MENU_INFO](context){

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
    }
}