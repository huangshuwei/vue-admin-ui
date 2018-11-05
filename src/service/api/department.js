/*
* 获取部门信息
* */
import config from "../../config/api.config";
import axiosRequest from "../../plugins/axios";

// 获取部门信息
export function getDepartmentTree() {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/GetDept`,
        method: 'get'
    })
}


// 获取用户直属部门
export function directDepartment() {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/GetUserDepts`,
        method: 'get'
    })
}