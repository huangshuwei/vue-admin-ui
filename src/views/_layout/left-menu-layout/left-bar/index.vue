<template>
	<div class="left-bar">
		<el-menu
			:default-active="defaultActive"
			:collapse="!rootState.isExpand"
			router
			@open="handleOpen"
			@close="handleClose"
		>
			<el-submenu index="/system-manage/system-setting">
				<template slot="title">
					<!--<i class="el-icon-setting"/>-->
					<span>系统设置</span>
				</template>

				<!--菜单项-->
				<left-bar-recursive :menu-tree="menuInfo"/>

				<div>
					<el-menu-item index="/system-manage/system-setting/department">部门设置</el-menu-item>
					<el-menu-item index="/system-manage/system-setting/module">模块设置</el-menu-item>
					<el-menu-item index="/system-manage/system-setting/position">岗位设置</el-menu-item>
					<el-menu-item index="/system-manage/system-setting/role">角色设置</el-menu-item>
				</div>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>

    import {mapState} from 'vuex'
    import leftBarRecursive from './left-bar-recursive'

    export default {
        name: 'LeftBar',
        components: {leftBarRecursive},
        data() {
            return {
                collapse: false,
                defaultActive: ''
            }
        },
        computed: {

            ...mapState({
                rootState: state => state.root,
                menuInfo: state => state.root.menuInfo
            }),
        },

        watch: {

            $route(to) {

                this.addDefaultMenuKey(to);
            }
        },

        methods: {

            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },

            addDefaultMenuKey(route) {

                let defaultMenuKey = route.matched[route.matched.length - 1];

                this.defaultActive = defaultMenuKey.path;
            }
        },

        created() {
           // alert(1)
            this.addDefaultMenuKey(this.$route);
        },
    }
</script>

<style>
    .left-bar {
        height: calc(100vh);
    }
</style>