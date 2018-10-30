import Cookies from 'js-cookie'
import * as identitys from "@/config/identity.config.js"

export function getToken() {
    return Cookies.get(identitys.AUTH_TOKEN_KEY);
}

export function setToken(token) {
    if (identitys.AUTH_TOKEN_KEY){

        return Cookies.set(identitys.AUTH_TOKEN_KEY,token);
    }
    return false;
}

export function removeToken() {
    return Cookies.remove(identitys.AUTH_TOKEN_KEY);
}