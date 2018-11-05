<template>
    <el-container>
        <el-aside :style="leftBarWidth">
            <left-bar
                    class="left-bar-container"/>
        </el-aside>
        <el-container>
            <el-header style="height: 35px;">
                <div
                        v-if="rootState.showHeaderOperation"
                        class="header-operation">
                    <!--breadcrumb-->
                    <breadcrumb class="header-operation-breadcrumb"/>

                    <!--history tabs-->
                    <history-tabs class="header-operation-history-tabs"/>
                </div>
            </el-header>
            <el-main class="main-container scroll">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"/>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import {mapState} from 'vuex'
    import leftBar from './left-bar/index'
    import breadcrumb from './breadcrumb'
    import historyTabs from './history-tabs'
    
    export default {
        name: 'LeftBar',
        components: {
            leftBar, breadcrumb, historyTabs
        },
        computed: {

            ...mapState({
                rootState: state => state.root
            }),

            leftBarWidth() {

                return {
                    'width': this.rootState.isExpand ? this.rootState.leftBarExpandWidth : this.rootState.leftBarFoldWidth
                }
            }
        }

    }
</script>

<style>
    .left-bar-container {
        border-right: 1px solid #e6e6e6;
        overflow-x: hidden;
    }

    .main-container {
        overflow-y: scroll;
        height: calc(100vh - 96px);
        background: #f0f2f5;
        border-top: 1px solid #eee;
    }

    .header-operation {
        height: 35px;
        /*   line-height: 35px;*/
        background-color: #f5f4f4;
        /*border-top: solid 1px #e6e6e6;*/
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