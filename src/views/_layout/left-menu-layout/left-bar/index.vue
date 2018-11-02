<template>
	<div class="left-bar">
		<el-menu
			:default-active="defaultActive"
			:collapse="!rootState.isExpand"
			router
			@open="handleOpen"
			@close="handleClose"
		>
            <left-bar-recursive v-for="item in leftMenuInfo.children" :menu-tree="item" :parent-url="leftMenuInfo.url"/>
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
                leftMenuInfo: state => state.root.leftMenuInfo
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