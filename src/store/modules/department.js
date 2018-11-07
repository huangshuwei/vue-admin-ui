import {getDepartmentTree, addDepartment, updateDepartment, deleteDepartment} from '@/service/api/department'
import listToTree from '../../utils/array/listToTree'

let TYPES = {

    GET_DEPARTMENT_TREE: 'getDepartmentTree',
    ADD_DEPARTMENT: 'addDepartment',
    UPDATE_DEPARTMENT: 'updateDepartment',
    DELETE_DEPARTMENT: 'deleteDepartment',
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
        },

        // 删除部门信息
        [TYPES.ADD_DEPARTMENT](context, payload) {

            return new Promise((resolve, reject) => {

                deleteDepartment(payload).then(response => {

                    if (response && response.data.errCode === 0) {

                        resolve(response)
                    } else {

                        reject(response.data)
                    }
                }).catch(error => {

                    reject(error)
                })
            })
        },

        // 修改部门信息
        [TYPES.UPDATE_DEPARTMENT](context, payload) {

            return new Promise((resolve, reject) => {

                updateDepartment(payload).then(response => {

                    if (response && response.data.errCode === 0) {

                        resolve(response)
                    } else {

                        reject(response.data)
                    }

                }).catch(error => {

                    reject(error)
                })
            })
        },

        [TYPES.DELETE_DEPARTMENT](context, payload) {

            return new Promise((resolve, reject) => {

                updateDepartment(payload).then(response => {

                    if (response && response.data.errCode === 0) {

                        resolve(response)
                    } else {

                        reject(response.data)
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