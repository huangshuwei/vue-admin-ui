<template>
    <el-container>
        <el-aside :style="leftBarWidth">
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
    import {mapState, mapActions} from 'vuex'

    import leftBar from './left-bar.vue'
    import topBar from './top-bar.vue'

    export default{
        name: 'app',

        components: {
            leftBar, topBar
        },

        computed: {

            ...mapState({
                rootState: state => state.root
            }),

            leftBarWidth(){

                console.log({
                    'width':this.rootState.isExpand ? this.rootState.leftBarExpandWidth :  this.rootState.leftBarFoldWidth
                })
                return {
                    'width':this.rootState.isExpand ? this.rootState.leftBarExpandWidth :  this.rootState.leftBarFoldWidth
                }
            }

        },

        created(){
            console.log(this.rootState)
        }


    }
</script>