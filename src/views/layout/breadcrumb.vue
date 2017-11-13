<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :key="item.path" v-for="item in crumbsInfoList" :to="{path:item.path}">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

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