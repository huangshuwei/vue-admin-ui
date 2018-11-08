import Vue from "vue";
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

                        const department = response.data.data;

                        context.commit('addDepartmentDataSource', department)
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

                        const department = response.data.data;

                        context.commit('updateDepartmentDataSource', department)
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

        // 删除部门
        [TYPES.DELETE_DEPARTMENT](context, payload) {

            return new Promise((resolve, reject) => {

                deleteDepartment(payload).then(response => {

                    if (response && response.data.errCode === 0) {

                        context.commit('deleteDepartmentDataSource', payload.id)
                        context.commit('setDepartmentTree')

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
        addDepartmentDataSource(state, department){

            state.departmentDataSource.push(department)
        },

        // 添加到现有的部门树
        updateDepartmentDataSource(state, department){

            // 方法1
            const index = state.departmentDataSource.findIndex(item => item.id === department.id)
            state.departmentDataSource.splice(index,1,department)

            // 方法2
            //Vue.set(state.departmentDataSource, index, department);

            // 方法3
            // let departmentDataSourceItem = state.departmentDataSource.find(item => item.id === department.id)
            // Object.assign(departmentDataSourceItem, department);
        },

        // 删除现有的部门树
        deleteDepartmentDataSource(state, id){

            const index = state.departmentDataSource.findIndex(item => item.id === id)
            state.departmentDataSource.splice(index,1)
        }
    }

}