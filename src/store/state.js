export default {
    // 所有的对象属性必须添加在root节点下（防止和非公共组件的状态属性重复，重复会导致覆盖）
    root: {
        leftBarExpandWidth: '200px',
        leftBarFoldWidth: '64px',
        topBarHeight:60,
        // 面包屑、历史记录
        headerOperationHeight:35,
        isExpand: true,
        // 是否显示面包屑、历史记录
        showHeaderOperation:true,
        // 是否显示首页的面包屑（当是左右结构的菜单一般需要）
        showHomeBreadcrumb:false,


        // 全部菜单信息
        menuInfo:[],
        // 左侧菜单数据（包括当前顶级菜单）
        leftMenuInfo:{},


        // 权限
        permission:{
            isRouteLoaded:false
        }
    }

}