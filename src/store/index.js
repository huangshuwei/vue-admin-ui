import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import state from './state'
import createLogger from 'vuex/dist/logger'

// modules

// 示例
import login from "./modules/login.js";



// 将vuex注入到实例中
Vue.use(Vuex);


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        // 子模块
        login
    },
    plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
    strict: process.env.NODE_ENV === 'development' ? true : false
});