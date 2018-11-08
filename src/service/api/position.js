/*
* 获取部门信息
* */
import config from "../../config/api.config";
import axiosRequest from "../../plugins/axios";

// 获取岗位信息
export function getPositionTree() {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/GetPosition`,
        method: 'get'
    })
}

/*
 添加岗位
* */
export function addPosition(payload) {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/AddPosition`,
        method: 'POST',
        data: {
            name: payload.name,
            parentId: payload.parentId
        }
    })
}

/*
 修改岗位
* */
export function updatePosition(payload) {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/UpdatePosition`,
        method: 'POST',
        data: {
            name: payload.name,
            id: payload.id
        }
    })
}

/*
* 删除岗位
* */
export function deletePosition(payload) {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/DeletePosition`,
        method: 'POST',
        data: {
            id: payload.id
        }
    })
}