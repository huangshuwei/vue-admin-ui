<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item
			v-if="rootState.showHomeBreadcrumb"
			:to="{ path: '/' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item 
			v-for="item in crumbsInfoList" 
			v-if="item.name && item.name.length > 0" 
			:key="item.path"
			:to="{path:item.path}">{{ item.name }}
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>

    import {mapState} from 'vuex'

    export default {

        name: 'Breadcrumb',

        data() {

            return {

                crumbsInfoList: []
            }
        },
        computed: {

            ...mapState({
                rootState: state => state.root
            })
        },

        watch: {

            $route(to) {

                this.addCrumbsInfo(to);
            }
        },

        methods: {

            addCrumbsInfo(route) {

                if (route) {

                    // crumbs
                    let crumbs = [];
                    route.matched.forEach((item) => {
                        crumbs.push({name: item.name, path: item.path});
                    })
                    if (crumbs.length > 0) {

                        // 设置面包屑信息
                        this.crumbsInfoList = route.meta.isHomePage ? [] : crumbs;
                    }
                }
            }
        },

        created() {

            this.addCrumbsInfo(this.$route);
        },
    }
</script>

<style>
	.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{

		font-weight: normal;
	}
</style>
