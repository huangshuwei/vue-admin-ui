<template>
    <div>
        <el-tag v-for="item in historyTabs"
                @click.native.self="openTabs(item.path)"
                @close="handleTabClose(item)"
                :type="item.colorType" size="small" closable>
            {{item.name}}
        </el-tag>
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