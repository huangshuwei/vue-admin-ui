<template>
	<div 
		:style="leftBarStyle" 
		class="left-bar">
		<el-menu
			:key="resetLeftMenuKey"
			:collapse-transition="false"
			:default-active="defaultActive"
			:collapse="!rootState.isExpand"
			background-color="#fff"
			class="el-menu-left-bar"
			router
			@open="handleOpen"
			@close="handleClose"
		>
			<!--递归组件-->
			<left-bar-recursive
				:menu-tree="leftMenuInfo.children"
				:parent-url="leftMenuInfo.url"/>
		</el-menu>
	</div>
</template>
<script>

    import {mapState} from 'vuex'
    import leftBarRecursive from './left-bar-recursive'
    import viewportHeightMixin from '../../../_mixins/viewport-height'

    export default {
        name: 'LeftBar',
        components: {leftBarRecursive},
        mixins:[viewportHeightMixin],
        data() {
            return {
                collapse: false,
                defaultActive: '',
                resetLeftMenuKey: 1 // 重置左侧菜单
            }
        },
        computed: {

            ...mapState({
                rootState: state => state.root,
                leftMenuInfo: state => state.root.leftMenuInfo
            }),

			leftBarStyle(){

                return {
                    'height': (this.viewportHeight_Mixin - this.rootState.topBarHeight) + 'px'
                }
			}
        },

        watch: {

            $route(to) {

                this.addDefaultMenuKey(to);
            },

            leftMenuInfo() {

                ++this.resetLeftMenuKey;
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
        }
    }
</script>

<style>
	.el-menu-left-bar .el-submenu__title{
		font-weight: bold;
	}
	.el-menu--collapse .el-submenu__title span {
		height: 0;
		width: 0;
		overflow: hidden;
		visibility: hidden;
		display: inline-block;
	}

	.left-bar-container .el-menu-item.is-active:before{
		content: " ";
		top: 0;
		left: 0;
		bottom: 0;
		width: 3px;
		background: #409eff;
		position: absolute;
	}
</style>