<template>
    <el-container class="layout-main">
        <el-header :height="headerHeight" style="z-index:1">
            <!--top bar-->
            <top-bar/>
        </el-header>
        <el-container>
            <div style="flex:1">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"/>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"/>
            </div>
        </el-container>
    </el-container>
</template>

<script>

    import {mapState} from 'vuex'
    import {topBar} from './_layout/main_layout'

    export default {

        components: {
            topBar
        },

        computed: {
            ...mapState({
                rootState: state => state.root
            }),

            headerHeight() {

                return this.rootState.topBarHeight + 'px'
            }
        },

        methods: {},
        created() {

        }
    }
</script>

