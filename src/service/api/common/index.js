import axiosRequest from '@/plugins/axios'
import apiConfig from '@/config/api.config'
import {ENV} from '../../../config/env.config'

// 预览
export function preview() {

    return axiosRequest({
        url: `${apiConfig.apiUrl.engine}`,
        method: 'get',
        params: {
            task: "compile-dev",
            env: ENV // dev：生成测试环境代码 production：生成生产环境代码
        }
    })
}