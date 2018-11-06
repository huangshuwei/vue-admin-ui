import {getDepartmentTree} from '@/service/api/department'
import listToTree from '../../utils/array/listToTree'

let TYPES = {

    GET_DEPARTMENT_TREE: 'getDepartmentTree'
};

export default {

    namespaced: true,
    state: {
        departmentTree: [],
    },

    actions: {

        // 获取部门数结构
        [TYPES.GET_DEPARTMENT_TREE](context) {

            return new Promise((resolve, reject) => {

                getDepartmentTree().then(response => {

                    const data = response.data;

                    if (data && Array.isArray(data.data) && data.data.length > 0) {

                        let menuList = listToTree(data.data, {
                            idKey: 'id',
                            parentKey: 'parentId',
                            childrenKey: 'children'
                        });


                        context.commit(TYPES.GET_DEPARTMENT_TREE, menuList)
                        resolve(menuList);

                    } else {

                        reject(response)
                    }
                }).catch(error => {

                    reject(error)
                })
            })
        }
    },
    mutations: {

        [TYPES.GET_DEPARTMENT_TREE](state, payload) {

            state.departmentTree = payload;
        }
    }


}