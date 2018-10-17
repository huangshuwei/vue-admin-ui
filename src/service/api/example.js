import axiosRequest from '../../plugins/axios'
import config from '../../config/api.config'


// get article list
export function getExampleInfo() {

     return axiosRequest({
         url: `${config.apiUrl.example}/home/getjson`,
         method: 'get',
         params: {
             name:'11111'
         }
     })
}

