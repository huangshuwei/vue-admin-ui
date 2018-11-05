export default {
    // 所有的对象属性必须添加在root节点下（防止和非公共组件的状态属性重复，重复会导致覆盖）
    root: {
        // 左侧菜单展开后的宽度
        leftBarExpandWidth: 200,
        // 左侧菜单收起后的宽度
        leftBarFoldWidth: 64,
        // 顶部导航栏的宽度
        topBarHeight:60,
        // 面包屑、历史记录
        headerOperationHeight:35,
        // 内容展示区的 padding
        contentPadding:12,


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