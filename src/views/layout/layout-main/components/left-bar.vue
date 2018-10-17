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
			<el-menu-item index="/example/index">
				<i class="el-icon-setting"/>
				<span slot="title">其他</span>
			</el-menu-item>
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