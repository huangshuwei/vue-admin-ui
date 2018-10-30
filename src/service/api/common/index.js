import axiosRequest from "../../../plugins/axios";
import config from '../../../config/api.config'

/*
* 获取菜单信息
* */
export function getMenuInfo() {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/GetModule`,
        method: 'get'
    })
}
