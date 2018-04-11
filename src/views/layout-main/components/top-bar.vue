<template>
    <div class="top-bar">
        <el-row>
            <el-col :span="1">
                <div class="top-bar-expand">
                    <span @click.stop="switchLeftBar()" class="top-bar-expand-span"><i :class="['top-bar-expand-i','iconfont','icon-caidan',topBarExpandIClasses]"></i></span>
                </div>
            </el-col>
            <el-col :span="23">
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#fff"
                        text-color="#666"
                        active-text-color="#000">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<style>
    .top-bar-expand-i{
        display: inline-block;
        transform: rotate(0deg);
        transition: .38s;
        transform-origin: 50% 50%;
    }

    .top-bar-expand-i.active{
        transform: rotate(-90deg);
    }
</style>

<script>

    import {mapActions,mapState} from 'vuex'

    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        computed: {

            ...mapState({
                rootState: state => state.root
            }),

            topBarExpandIClasses(){

                return {
                    'active':!this.rootState.isExpand
                }
            }
        },
        methods: {
            ...mapActions({
                'switchLeftBar': 'switchLeftBar',

            }),

            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },

            /* switchLeftBar(){


             }*/
        }
    }
</script>