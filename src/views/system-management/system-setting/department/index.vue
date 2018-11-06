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
            <i-main-container allow-scroll-y padding="10px">
                <!--按钮操作区-->
                <el-row class="operation-btns">
                    <el-button @click.native.stop="addDepart()" type="primary" size="small" plain>新增</el-button>
                    <el-button type="primary" size="small" plain :disabled="!isSelectedRow">修改</el-button>
                    <el-button type="warning" size="small" plain :disabled="!isSelectedRow" :loading="false">删除
                    </el-button>
                </el-row>

                <!--列表数据-->
                <el-table
                        :data="tableData"
                        border
                        highlight-current-row
                        @current-change="handleTableRowChange">
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
                            width="180"
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

                tableData: [],
                isSelectedRow: false,
                selectedRow: null
            }
        },

        methods: {
            restTableSelectedInfo() {

                this.isSelectedRow = false;
                this.selectedRow = null;
            },

            setTableSelectedInfo(row) {

                this.isSelectedRow = true;
                this.selectedRow = row;
            },

            // tree 节点变化触发的事件
            currentNodeChange(node) {


                this.tableData = node.children;
                this.restTableSelectedInfo();
            },

            // 处理 table 行点击事件
            handleTableRowChange(row) {

                if (row){

                    this.setTableSelectedInfo(row);
                    console.log("handleTableRowChange::", row)
                }
            },

            addDepart() {


            }
        }
    }
</script>

<style scoped>

    .operation-btns {
        margin: 10px 0 20px 0;
    }
</style>