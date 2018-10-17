import {getExampleInfo} from '@/service/api/example'

const types = {
    GET_EXAMPLE_INFO: 'getExampleInfo'
};


export default {
    namespaced: true,
    state: {

        exampleInfo: null
    },
    actions: {
        // getArticleList
        [types.GET_EXAMPLE_INFO](context, infoId) {

            return new Promise((resolve, reject) => {

                getExampleInfo(infoId).then(res => {

                    context.commit(types.GET_EXAMPLE_INFO, {res});

                    resolve(res.data);

                }).catch(error => {

                    reject(error);
                })
            })
        }
    },
    mutations: {
        // getArticleList
        [types.GET_EXAMPLE_INFO](state, {res}) {

            const resData = res.data;

            state.exampleInfo = resData;
        }
    },

    getters: {}
}