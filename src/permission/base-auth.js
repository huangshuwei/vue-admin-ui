import store from '@/store'
import {getToken} from './src/token' // getToken from cookie
import * as identitys from "@/config/identity.config.js"


function toLogin() {

    window.location.href = identitys.LOGIN_PATH;
}


function auth() {

    return new Promise((resolve, reject) => {

        const token = getToken();

        store.dispatch('login/getUserInfo', {token}).then(() => {

            resolve();

        }).catch(err => {

            reject(err);

            toLogin();
        })
    })

}

export default auth