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

                <!--breadcrumb-->
                <breadcrumb></breadcrumb>
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

    import leftBar from './left-bar.vue'
    import topBar from './top-bar.vue'
    import breadcrumb from './breadcrumb.vue'

    export default{
        name: 'app',

        components: {
            leftBar, topBar, breadcrumb
        },

        computed: {

            ...mapState({
                rootState: state => state.root
            }),

            leftBarWidth(){

                console.log({
                    'width': this.rootState.isExpand ? this.rootState.leftBarExpandWidth : this.rootState.leftBarFoldWidth
                })
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

                console.log(to)

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