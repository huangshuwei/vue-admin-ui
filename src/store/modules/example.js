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