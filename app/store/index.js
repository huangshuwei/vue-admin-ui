import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import state from './state'
import createLogger from "../../../../../public/devtool/vue/plugins/logger";





// 将vuex注入到实例中
Vue.use(Vuex);


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        // 子模块

    },
    plugins: __DEV__ ? [createLogger()] : [],
    strict: __DEV__ ? true : false
});