import axiosRequest from "../../plugins/axios";
import apiConfig from '../../config/api.config'

export function getApis() {

    var net = window.location;

    return new Promise((resolve,reject)=>{

        axiosRequest({
            url: `${net.protocol}//${net.hostname}:${net.port}/apis.json`,
            method: 'get'
        }).then(res=>{

            apiConfig.initApiInfo(res.data);

            resolve(res);

        }).catch(error=>{

            reject(error)
        })
    })
}
