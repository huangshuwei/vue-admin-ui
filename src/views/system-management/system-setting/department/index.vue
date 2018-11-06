<template>
    <el-row :gutter="10">
        <el-col :span="5">
            <i-main-container allow-scroll-y>
                <i-department-tree
                        isFirstNodeCheck
                        @current-node-change="currentNodeChange"
                />
            </i-main-container>
        </el-col>
        <el-col :span="19">
            <i-main-container allow-scroll-y>

                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="部门名称"
                            width="180"/>
                    <el-table-column
                            prop="updateTime"
                            label="修改时间"
                            width="180"/>
                    <el-table-column
                            prop="updater"
                            label="修改人"
                    />
                </el-table>
            </i-main-container>
        </el-col>
    </el-row>
</template>

<script>

    import {mapActions} from 'vuex'

    export default {
        name: 'Department',
        data() {

            return {

                tableData: []
            }
        },

        methods: {
            // 节点变化触发的事件
            currentNodeChange(node) {

                this.tableData = node.children;
                console.log("node::::", node)
            }
        }
    }
</script>