import { login, getUserInfo } from '@/service/api/login'
import { setToken, removeToken } from '@/permission/src/token'

let TYPES = {
    LOGIN: 'login',
    SET_TOKEN:'setToken',
    GET_USER_INFO:'getUserInfo'
};

export default {
    namespaced: true,
    state:{
        token:'',
        userInfo:null
    },
    actions:{
        // login
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
        },

        loginOut(){

            return new Promise((resolve)=>{

                setTimeout(()=>{

                    removeToken()
                    resolve();
                })
            })
        },

        // getUserInfo
        getUserInfo(context, payLoad){

            const token = payLoad.token;

            return new Promise((resolve,reject)=>{

                getUserInfo(token).then(response=>{

                    const data = response.data;

                    console.log(data);

                    let status = data.status;

                    if (status === 1){

                        this.state.userInfo = data.data;
                        resolve(data);
                    }else{

                        reject(data)
                    }

                }).catch(error=>{

                    reject(error)
                })
            })
        }
    },
    mutations:{
        [TYPES.LOGIN]() {

            //state.historyManagerData = payload.dataJson
        },

        [TYPES.SET_TOKEN](state,payload){

            state.token = payload;
        }
    }
}