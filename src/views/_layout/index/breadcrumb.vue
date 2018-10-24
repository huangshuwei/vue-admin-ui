<template>
	<el-breadcrumb separator="/">
		<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item 
			v-for="item in crumbsInfoList" 
			v-if="item.name && item.name.length > 0" 
			:key="item.path"
			:to="{path:item.path}">{{ item.name }}
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>

    export default {

        name: 'Breadcrumb',

        data() {

            return {

                crumbsInfoList: []
            }
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
	.header-operation {
		height: 35px;
		/*   line-height: 35px;*/
		background-color: #f5f4f4;
		border-top: solid 1px #e6e6e6;
	}

	.header-operation:before {
		content: '';
		display: inline-block;
		height: 100%;
		vertical-align: middle;
		/* border: 1px solid red;*/ /* so we can see what's going on */
	}

	.header-operation-breadcrumb {
		vertical-align: middle;
		display: inline-block;
		min-width: 230px;
		padding-left: 10px;
	}

	.header-operation-history-tabs {
		vertical-align: middle;
		display: inline-block;
	}

	.header-operation-history-tabs .el-tag {
		margin-left: 10px;
		cursor: pointer;
	}
</style>