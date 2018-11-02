// 公共 action
import * as TYPES from './types'

import {getMenuInfo} from  '../service/api/common'


import listToTree from '../utils/array/listToTree'

export default {
    // 左侧菜单展开折叠
    [TYPES.SWITCH_LEFT_BAR](context) {

        context.commit(TYPES.SWITCH_LEFT_BAR, {});
    },

    // 修改路由装载信息
    [TYPES.UPDATE_ROUTE_LOAD_INFO](context){

        context.commit(TYPES.UPDATE_ROUTE_LOAD_INFO)
    },

    // 获取全部菜单信息（包含顶级菜单）
    [TYPES.SET_MENU_INFO](context){

        return new Promise((resolve, reject) => {

            getMenuInfo().then((res)=>{

                if (res.data && Array.isArray(res.data.data) && res.data.data.length > 0){

                    let menuList = listToTree(res.data.data, {
                        idKey: 'id',
                        parentKey: 'parentId',
                        childrenKey: 'children'
                    });

                    context.commit(TYPES.SET_MENU_INFO, menuList);

                    resolve(menuList);

                }else{

                    reject(res)
                }
            }).catch(error=>{

                reject(error)
            })
        })
    },

    // 获取左侧菜单信息
    [TYPES.SET_LEFT_MENU_INFO](context,menuUrl){

        if (menuUrl && menuUrl.indexOf('/') === 0){

            menuUrl = menuUrl.split('/')[1];

            const menuInfo = context.state.root.menuInfo;

            let leftMenuInfo = menuInfo.find(item =>item.url === menuUrl);

            if (Array.isArray(leftMenuInfo.children) && leftMenuInfo.children.length > 0){

                context.commit(TYPES.SET_LEFT_MENU_INFO,leftMenuInfo)

                console.log("leftMenuInfo.children::",JSON.stringify(leftMenuInfo))

            }else{

                console.log(`can't find leftMenuInfo by  ${menuUrl}`)
            }
        }

        //console.log("context.state.root.menuInfo::",context.state.root.menuInfo)
    }
}