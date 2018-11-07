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
                    <el-button @click.native.stop="openAddDialog()" type="primary" size="medium" plain>新增</el-button>
                    <el-button @click.native.stop="openUpdateDialog()" type="primary" size="medium" plain
                               :disabled="!isSelectedRow">修改
                    </el-button>
                    <el-button type="danger" size="medium" plain :disabled="!isSelectedRow" :loading="false">删除
                    </el-button>

                    <addDialog
                            @dialog-confirm="dialogConfirm"
                            width="500px" ref="formDialog"></addDialog>
                </el-row>

                <!--列表数据-->
                <el-table
                        :data="tableData"
                        width="100%"
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

                    />
                </el-table>
            </i-main-container>
        </el-col>
    </el-row>
</template>

<script>

    import {mapActions} from 'vuex'
    import addDialog from './add-dialog'


    const OPERATIONS = {ADD: 0, UPDATE: 1}

    export default {
        name: 'Department',
        components: {addDialog},
        data() {

            return {

                tableData: [],
                isSelectedRow: false, // 是否选中了行
                selectedRow: null, // 选中的行数据

                operationType: -1, // 操作类型

                currentTreeNode: null, // 当前选中tree 节点
                formLabelWidth: '120px'
            }
        },

        methods: {

            ...mapActions('department', {
                'addDepartmentAction': 'addDepartment',
                'updateDepartmentAction': 'updateDepartment'
            }),

            // 重置表格选中信息
            restTableSelectedInfo() {

                this.isSelectedRow = false;
                this.selectedRow = null;
            },

            // 设置表格选中信息
            setTableSelectedInfo(row) {

                this.isSelectedRow = true;
                this.selectedRow = row;
            },

            // tree 节点变化触发的事件
            currentNodeChange(node) {

                this.currentTreeNode = node;
                this.tableData = node.children;
                this.restTableSelectedInfo();
            },

            // 处理 table 行点击事件
            handleTableRowChange(row) {

                if (row) {

                    this.setTableSelectedInfo(row);
                    console.log("handleTableRowChange::", row)
                }
            },

            // 打开新增弹窗
            openAddDialog() {

                this.operationType = OPERATIONS.ADD;
                this.$refs.formDialog.openDialog({title: '新增部门', parentDepart: this.currentTreeNode.name});
            },

            // 打开修改弹窗
            openUpdateDialog() {

                this.operationType = OPERATIONS.UPDATE;
                this.$refs.formDialog.openDialog({
                    title: '修改部门',
                    currentDepartName: this.selectedRow.name,
                    parentDepart: this.currentTreeNode.name
                });
            },

            // 确认行为
            dialogConfirm(data) {

                if (this.operationType === OPERATIONS.ADD) {


                    console.log("dialogConfirm::", data)

                    this.addDepartmentAction({
                        Name: data.departmentName,
                        ParentId: this.currentTreeNode.id
                    }).then(response => {

                        this.$refs.formDialog.closeDialog();

                    }).catch(error => {

                        alert('异常')
                    })


                } else if (this.operationType === OPERATIONS.UPDATE) {

                    alert('修改')
                    this.updateDepartmentAction({
                        Name: data.departmentName,
                        Id: this.currentTreeNode.id
                    }).then(response => {

                        this.$refs.formDialog.closeDialog();

                    }).catch(error => {

                        alert('异常')
                    })
                }
            }
        }
    }
</script>

<style scoped>

    .operation-btns {
        margin: 10px 0 20px 0;
    }
</style>