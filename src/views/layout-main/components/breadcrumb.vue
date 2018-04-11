<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :key="item.path" v-for="item in crumbsInfoList" v-if="item.name && item.name.length > 0"
                            :to="{path:item.path}">{{item.name}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>

    export default {

        name: 'breadcrumb',

        data() {

            return {

                crumbsInfoList: []
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

        watch: {

            $route(to, from) {

                this.addCrumbsInfo(to);
            }
        }
    }
</script>