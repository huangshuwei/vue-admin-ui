<template>
    <el-container>
        <el-aside width="200px">
            <!--left bar-->
            <left-bar></left-bar>
        </el-aside>
        <el-container>
            <el-header>
                <!--top bar-->
                <top-bar></top-bar>
            </el-header>
            <el-main>
                <!--container-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

    import leftBar from './left-bar.vue'
    import topBar from './top-bar.vue'

    export default{
        name:'app',

        components:{
            leftBar,topBar
        }


    }
</script>