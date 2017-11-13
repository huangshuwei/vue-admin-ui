<template>
    <div class="left-bar">
        <el-menu
                router
                default-active="2"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :collapse="!rootState.isExpand"
        >

            <el-menu-item index="/intro">
                <i class="el-icon-menu"></i>
                <span slot="title">简介</span>
            </el-menu-item>
            <el-menu-item index="/settings">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>组件</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/components/table">表格</el-menu-item>
                   <!-- <el-menu-item index="/components/table1">表格1</el-menu-item>
                    <el-menu-item index="/components/table2">表格2</el-menu-item>-->
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">test</template>
                    <el-menu-item index="/components/test/test1">test-1</el-menu-item>
                    <el-menu-item index="/components/test/test2">test-2</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>

        </el-menu>
    </div>
</template>
<script>

    import {mapState} from 'vuex'

    export default{
        name: 'left-bar',
        data(){
            return {
                collapse: false
            }
        },
        computed: {

            ...mapState({
                rootState: state => state.root
            }),
        },

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>