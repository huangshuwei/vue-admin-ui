<template>
	<div class="left-bar">
		<el-menu
			:default-active="defaultActive"
			:collapse="!rootState.isExpand"
			router
			@open="handleOpen"
			@close="handleClose"
		>
			<el-menu-item index="/intro">
				<i class="el-icon-menu"/>
				<!--<i class="iconfont icon-jianjie"></i>-->
				<span slot="title">简介</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-setting"/>
					<span>员工管理</span>
				</template>
				<el-menu-item index="1-1">员工录入</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-setting"/>
					<span>权限管理</span>
				</template>
				<el-menu-item index="1-1">角色设置</el-menu-item>
				<el-menu-item index="1-2">菜单设置</el-menu-item>
				<el-menu-item index="1-3">权限设置</el-menu-item>
			</el-submenu>
			<!--<el-menu-item index="/intro">
				<i class="el-icon-menu"/>
				&lt;!&ndash;<i class="iconfont icon-jianjie"></i>&ndash;&gt;
				<span slot="title">简介</span>
			</el-menu-item>
			<el-menu-item index="/example">
				<i class="el-icon-setting"/>
				<span slot="title">其他</span>
			</el-menu-item>-->
		</el-menu>
	</div>
</template>
<script>

    import {mapState} from 'vuex'

    export default {
        name: 'LeftBar',
        data() {
            return {
                collapse: false,
                defaultActive: '/intro'
            }
        },
        computed: {

            ...mapState({
                rootState: state => state.root
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

            this.addDefaultMenuKey(this.$route);
        },
    }
</script>

<style>
    .left-bar {
        height: calc(100vh);
    }
</style>