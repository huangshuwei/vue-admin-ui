import { login, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

let types = {
    LOGIN: 'login',
    SET_TOKEN:'setToken'
};

export default {
    namespaced: true,
    state:{
        token:''
    },
    actions:{
        login(context, payLoad) {

            const account = payLoad.account && payLoad.account.trim();

            return new Promise((resolve,reject)=>{

                login(account,payLoad.password).then(response=>{

                    const data = response.data;

                    console.log(data)

                    let status = data.status;

                    if (status === 1){ // 登录成功

                        setToken(data.data.token)
                    }

                    resolve(data);

                }).catch(error=>{

                    reject(error)
                })
            })
        }
    },
    mutations:{
        [types.LOGIN](state, payload) {

            //state.historyManagerData = payload.dataJson
        },

        [types.SET_TOKEN](state,payload){

            state.token = payload;
        }
    }
}