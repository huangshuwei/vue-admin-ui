<template>
	<div class="left-bar" :style="leftBarStyle">
		<el-menu
			:key="resetLeftMenuKey"
			:collapse-transition="false"
			:default-active="defaultActive"
			:collapse="!rootState.isExpand"
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

    import vh from '@/utils/dom/viewport-height'

    export default {
        name: 'LeftBar',
        components: {leftBarRecursive},
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
                    'height': (vh() - this.rootState.topBarHeight) + 'px'
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