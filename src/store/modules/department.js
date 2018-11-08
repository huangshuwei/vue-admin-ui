import {getDepartmentTree, addDepartment, updateDepartment, deleteDepartment} from '@/service/api/department'
import listToTree from '../../utils/array/listToTree'

let TYPES = {

    GET_DEPARTMENT_TREE: 'getDepartmentTree',
    ADD_DEPARTMENT: 'addDepartment',
    UPDATE_DEPARTMENT: 'updateDepartment',
    DELETE_DEPARTMENT: 'deleteDepartment'
};

export default {

    namespaced: true,
    state: {
        departmentTree: [],
        departmentDataSource:[] // 部门源数据
    },

    actions: {

        // 获取部门数结构
        [TYPES.GET_DEPARTMENT_TREE](context) {

            return new Promise((resolve, reject) => {

                getDepartmentTree().then(response => {

                    const data = response.data;

                    if (data && Array.isArray(data.data) && data.data.length > 0) {

                        context.commit('setDepartmentDataSource', data.data)
                        context.commit('setDepartmentTree')

                        resolve();

                    } else {

                        reject(response)
                    }
                }).catch(error => {

                    reject(error)
                })
            })
        },

        // 新增部门信息
        [TYPES.ADD_DEPARTMENT](context, payload) {

            return new Promise((resolve, reject) => {

                addDepartment(payload).then(response => {

                    if (response && response.data.errCode === 0) {

                        const newDepart = response.data.data;

                        context.commit('addDepartmentDataSource', newDepart)
                        context.commit('setDepartmentTree')

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

        // 删除部门
        [TYPES.DELETE_DEPARTMENT](context, payload) {

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
        }
    },
    mutations: {

        // 设置部门源数据
        setDepartmentDataSource(state, payload){

            state.departmentDataSource = payload;
        },

        // 设置部门树信息
        setDepartmentTree(state) {

            let departmentTree = listToTree(state.departmentDataSource, {
                idKey: 'id',
                parentKey: 'parentId',
                childrenKey: 'children'
            });

            state.departmentTree = departmentTree;
        },

        // 添加到现有的部门树
        addDepartmentDataSource(state, newDepartment){

            state.departmentDataSource.push(newDepartment)
        }
    }

}