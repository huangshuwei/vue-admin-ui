import {getPositionTree, addPosition, updatePosition, deletePosition} from '@/service/api/position'
import listToTree from '../../utils/array/listToTree'

let TYPES = {

    GET_POSITION_TREE: 'getPositionTree',
    ADD_POSITION: 'addPosition',
    UPDATE_POSITION: 'updatePosition',
    DELETE_POSITION: 'deletePosition'
};

export default {

    namespaced: true,
    state: {
        PositionTree: [],
        PositionDataSource:[] // 岗位源数据
    },

    actions: {

        // 获取岗位数结构
        [TYPES.GET_POSITION_TREE](context) {

            return new Promise((resolve, reject) => {

                getPositionTree().then(response => {

                    const data = response.data;

                    if (data && Array.isArray(data.data) && data.data.length > 0) {

                        context.commit('setPositionDataSource', data.data)
                        context.commit('setPositionTree')

                        resolve();

                    } else {

                        reject(response)
                    }
                }).catch(error => {

                    reject(error)
                })
            })
        },

        // 新增岗位信息
        [TYPES.ADD_POSITION](context, payload) {

            return new Promise((resolve, reject) => {

                addPosition(payload).then(response => {

                    if (response && response.data.errCode === 0) {

                        const Position = response.data.data;

                        context.commit('addPositionDataSource', Position)
                        context.commit('setPositionTree')

                        resolve(response)
                    } else {

                        reject(response.data)
                    }
                }).catch(error => {

                    reject(error)
                })
            })
        },

        // 修改岗位信息
        [TYPES.UPDATE_POSITION](context, payload) {

            return new Promise((resolve, reject) => {

                updatePosition(payload).then(response => {

                    if (response && response.data.errCode === 0) {

                        const Position = response.data.data;

                        context.commit('updatePositionDataSource', Position)
                        context.commit('setPositionTree')

                        resolve(response)
                    } else {

                        reject(response.data)
                    }

                }).catch(error => {

                    reject(error)
                })
            })
        },

        // 删除岗位
        [TYPES.DELETE_POSITION](context, payload) {

            return new Promise((resolve, reject) => {

                deletePosition(payload).then(response => {

                    if (response && response.data.errCode === 0) {

                        context.commit('deletePositionDataSource', payload.id)
                        context.commit('setPositionTree')

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

        // 设置岗位源数据
        setPositionDataSource(state, payload){

            state.PositionDataSource = payload;
        },

        // 设置岗位树信息
        setPositionTree(state) {

            let PositionTree = listToTree(state.PositionDataSource, {
                idKey: 'id',
                parentKey: 'parentId',
                childrenKey: 'children'
            });

            state.PositionTree = PositionTree;
        },

        // 添加到现有的岗位树
        addPositionDataSource(state, Position){

            state.PositionDataSource.push(Position)
        },

        // 添加到现有的岗位树
        updatePositionDataSource(state, Position){

            // 方法1
            const index = state.PositionDataSource.findIndex(item => item.id === Position.id)
            state.PositionDataSource.splice(index,1,Position)

            // 方法2
            //Vue.set(state.PositionDataSource, index, Position);

            // 方法3
            // let PositionDataSourceItem = state.PositionDataSource.find(item => item.id === Position.id)
            // Object.assign(PositionDataSourceItem, Position);
        },

        // 删除现有的岗位树
        deletePositionDataSource(state, id){

            const index = state.PositionDataSource.findIndex(item => item.id === id)
            state.PositionDataSource.splice(index,1)
        }
    }

}