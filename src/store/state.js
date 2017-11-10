export default {
    // 所有的对象属性必须添加在root节点下（防止和非公共组件的状态属性重复，重复会导致覆盖）
    root: {
        leftBarExpandWidth: '200px',
        leftBarFoldWidth: '64px',
        isExpand: true,

        // 面包屑
        crumbsInfoList: [
            {name: '11', path: '11'},
            {name: '22', path: '22'},
        ],
        // history tabs
        historyTabs: [
            /*{colorType: 'info', name: 'table1'},
            {colorType: 'info', name: 'table2'},
            {colorType: '', name: 'table3'},*/
        ]
    }

}