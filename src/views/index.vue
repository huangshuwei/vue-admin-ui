<template>
    <el-container class="layout-main">
        <el-header height="120">
            <!--top bar-->
            <top-bar/>
        </el-header>
        <el-container>
            <div style="flex:1">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"/>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"/>
            </div>
        </el-container>
    </el-container>
</template>

<script>

    import {topBar} from './_layout/main_layout'
    import routerFactory from '../router/index/router-factory'

    import {mapActions} from 'vuex'

    export default {

        components: {
            topBar
        },

        methods: {
            ...mapActions({
                getMenuInfoAction: 'getMenuInfo',
            }),

            // 获取菜单信息
            getMenuInfo() {

                this.getMenuInfoAction().then(menuList => {

                    // 动态添加路由
                    routerFactory.addDynamicRoutes(menuList).then(routeObj => {

                        this.$router.addRoutes(routeObj);
                        this.$router.options.routes.push(routeObj);
                    }).catch(error => {

                        console.log("addDynamicRoutes error:", error)
                    })

                }).catch(error => {

                    console.log("getMenuInfo error:", error)
                });
            }
        },
        created() {

            this.getMenuInfo();
        }
    }
</script>

