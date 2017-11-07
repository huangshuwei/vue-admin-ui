<template>
    <div class="top-bar">
        <el-row>
            <el-col :span="2">
                <div class="top-bar-expand">
                    <span @click.stop="switchLeftBar()" class="top-bar-expand-span"><i class="iconfont icon-caidan"></i></span>
                </div>
            </el-col>
            <el-col :span="22">
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

<script>

    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                activeIndex: '1'
            };
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