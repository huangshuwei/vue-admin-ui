const departmentTree = {
    "errCode": 0,
    "errMsg": "",
    "pageSize": 1,
    "totalPage": 1,
    "pageNum": 1,
    "totalRows": 1,
    "data": [
        {
            "id": 1,
            "name": "xx公司",
            "parentId": 0,
            "order": 1,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 2,
            "name": "部门1",
            "parentId": 1,
            "order": 6,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 3,
            "name": "部门2",
            "parentId": 1,
            "order": 22,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 4,
            "name": "部门3",
            "parentId": 1,
            "order": 28,
            "updater": "系统",
            "updateTime": "2018-11-07 02:11"
        },
        {
            "id": 5,
            "name": "部门4",
            "parentId": 1,
            "order": 8,
            "updater": "系统",
            "updateTime": "2018-11-07 02:11"
        },
        {
            "id": 6,
            "name": "部门5",
            "parentId": 1,
            "order": 29,
            "updater": "系统",
            "updateTime": "2018-11-07 02:11"
        },
        {
            "id": 7,
            "name": "部门3-子部门1",
            "parentId": 3,
            "order": 27,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 8,
            "name": "部门3-子部门2",
            "parentId": 3,
            "order": 16,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 9,
            "name": "部门3-子部门3",
            "parentId": 3,
            "order": 18,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 10,
            "name": "部门3-子部门4",
            "parentId": 3,
            "order": 21,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 11,
            "name": "子部门1",
            "parentId": 5,
            "order": 20,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 12,
            "name": "子部门2",
            "parentId": 5,
            "order": 13,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 13,
            "name": "子部门3",
            "parentId": 5,
            "order": 30,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 14,
            "name": "子部门4",
            "parentId": 5,
            "order": 21,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 15,
            "name": "子部门5",
            "parentId": 5,
            "order": 20,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 16,
            "name": "子部门6",
            "parentId": 5,
            "order": 13,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 17,
            "name": "子部门7",
            "parentId": 5,
            "order": 30,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        },
        {
            "id": 18,
            "name": "子部门1",
            "parentId": 6,
            "order": 10,
            "updater": "系统",
            "updateTime": "2018-10-15 05:10"
        }
    ]
}


export default {

    // 获取部门信息
    getDepartmentTree() {

        return departmentTree;
    }
}