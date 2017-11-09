<template>
    <el-container>
        <el-aside :style="leftBarWidth">
            <!--left bar-->
            <left-bar></left-bar>

        </el-aside>
        <el-container>
            <el-header height="120">
                <!--top bar-->
                <top-bar></top-bar>

                <div class="header-operation">
                    <!--breadcrumb-->
                    <breadcrumb class="header-operation-breadcrumb"></breadcrumb>

                    <!--history tabs-->
                    <history-tabs class="header-operation-history-tabs"></history-tabs>
                </div>
            </el-header>
            <el-main>
                <!--container-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
    import {mapState, mapActions} from 'vuex'

    import leftBar from '../views/layout/left-bar.vue'
    import topBar from '../views/layout/top-bar.vue'
    import breadcrumb from '../views/layout/breadcrumb.vue'
    import historyTabs from '../views/layout/history-tabs.vue'

    export default{
        name: 'app',

        components: {
            leftBar, topBar, breadcrumb,historyTabs
        },

        computed: {

            ...mapState({
                rootState: state => state.root
            }),

            leftBarWidth(){

                return {
                    'width': this.rootState.isExpand ? this.rootState.leftBarExpandWidth : this.rootState.leftBarFoldWidth
                }
            }

        },

        methods:{

            ...mapActions({
                setCrumbsInfoList:'setCrumbsInfoList'
            })
        },

        watch : {
            $route(to, from){

                console.log(to.matched)

                let crumbs = [];
                to.matched.forEach((item) =>{
                    crumbs.push({name : item.name, path : item.path});
                })
                if(crumbs.length > 0){
                    // 设置面包屑信息
                    this.setCrumbsInfoList(crumbs);
                    // 设置历史记录
                    //this.addHistoryTab(crumbs[crumbs.length - 1])
                }
            }
        }


    }
</script>