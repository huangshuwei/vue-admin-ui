<template>
    <div class="breadcrumb">
        <el-breadcrumb class="dsadasd" separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="item in crumbsInfoList" :to="{path:item.path}">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style>
    .breadcrumb {
        padding: 10px 20px;
    }
</style>

<script>

    import {mapState} from 'vuex'

    export default{

        name: 'breadcrumb',
        computed: {

            ...mapState({

                crumbsInfoList: state => state.root.crumbsInfoList
            })
        }


    }
</script>