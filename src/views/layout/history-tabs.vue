<template>
    <div>
        <!--用span 包裹是因为 el-tag 组件close 回调会冒泡 -->
        <span v-for="item in historyTabs" @click.stop="openTabs(item.path)">
            <el-tag @close="handleTabClose(item)"
                    :type="item.colorType" size="small" closable>{{item.name}}</el-tag>
        </span>
    </div>
</template>

<script>

    import {mapState,mapActions} from 'vuex'

    export default{
        name:'history-tabs',

        computed:{

            ...mapState({
                historyTabs: state => state.root.historyTabs
            })
        },

        methods:{

            ...mapActions({

                deleteHistoryTabs:'deleteHistoryTabs'
            }),

            // open tabs
            openTabs(path){

                this.$router.replace({path : path});
            },


            handleTabClose(item){

                this.deleteHistoryTabs(item);
            }

        }
    }
</script>