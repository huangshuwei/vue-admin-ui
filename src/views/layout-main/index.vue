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

    import {mapState} from 'vuex'

    import {breadcrumb,historyTabs,leftBar,topBar,childRouteTpl} from './components'

    export default {

        components:{
            breadcrumb,historyTabs,leftBar,topBar,childRouteTpl
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
        }
    }
</script>