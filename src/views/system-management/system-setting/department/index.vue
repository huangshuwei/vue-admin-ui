<template>
	<el-row :gutter="10">
		<el-col :span="5">
			<i-main-container allow-scroll-y>
				<i-department-tree
					ref="dmTree"
					is-first-node-check
					@current-node-change="currentNodeChange"
				/>
			</i-main-container>
		</el-col>
		<el-col :span="19">
			<i-main-container 
				:padding-all="10" 
				allow-scroll-y>
				<!--按钮操作区-->
				<el-row class="operation-btns">
					<el-button 
						type="primary" 
						size="medium" 
						plain 
						@click.native.stop="openAddDialog()">新增</el-button>
					<el-button 
						:disabled="!isSelectedRow" 
						type="primary" 
						size="medium" 
						plain
						@click.native.stop="openUpdateDialog()">修改
					</el-button>
					<el-button 
						:disabled="!isSelectedRow" 
						:loading="isDeleteBtnLoading" 
						type="danger" 
						size="medium"
						plain 
						@click.native.stop="deleteDepartment">删除
					</el-button>

					<!--弹窗-->
					<dm-dialog
						ref="formDialog"
						:is-confirm-btn-loading="isConfirmBtnLoading"
						width="500px"
						@dialog-confirm="dialogConfirm"
					/>
				</el-row>

				<!--列表数据-->
				<el-table
					ref="dmTable"
					:data="tableData"
					width="100%"
					border
					highlight-current-row
					@current-change="handleTableRowChange">
					<el-table-column
						type="index"
						label="序号"
						width="50"/>
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
    import DmDialog from './dm-dialog'


    const OPERATIONS = {ADD: 0, UPDATE: 1}

    export default {
        name: 'Department',
        components: {DmDialog},
        data() {

            return {

                tableData: [],
                isSelectedRow: false, // 是否选中了行
                selectedRow: null, // 选中的行数据

                operationType: -1, // 操作类型

                currentTreeNode: null, // 当前选中tree 节点
                formLabelWidth: '120px',

                isConfirmBtnLoading: false, // 确认按钮加载中（后台提交时）
                isDeleteBtnLoading:false // 是否删除按钮开启loading
            }
        },

        methods: {

            ...mapActions('department', {
                'addDepartmentAction': 'addDepartment',
                'updateDepartmentAction': 'updateDepartment',
                'deleteDepartmentAction': 'deleteDepartment'
            }),

            // 重置表格选中信息
            restTableSelectedInfo() {

                this.isSelectedRow = false;
                this.selectedRow = null;
                this.$refs.dmTable.setCurrentRow(null);
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

                    this.isConfirmBtnLoading = true;

                    this.addDepartmentAction({
                        name: data.departmentName,
                        parentId: this.currentTreeNode.id
                    }).then(() => {

                        this.$refs.formDialog.closeDialog();
                        this.$message({message: '新增成功', type: "success"})

                    }).catch(() => {

                        this.$alert("新增失败")

                    }).finally(() => {

                        this.isConfirmBtnLoading = false;
                    })

                } else if (this.operationType === OPERATIONS.UPDATE) {

                    this.isConfirmBtnLoading = true;

                    this.updateDepartmentAction({
                        name: data.departmentName,
                        id: this.selectedRow.id
                    }).then(() => {

                        this.$refs.formDialog.closeDialog();
                        this.$message({message: '修改成功', type: "success"})

						// 取消选中
						this.restTableSelectedInfo();

                    }).catch(() => {

                        this.$alert("修改失败")

                    }).finally(() => {

                        this.isConfirmBtnLoading = false;
                    })

                }
            },

            // 删除部门
            deleteDepartment() {


                this.$confirm(`是否要删除部门"${this.selectedRow.name}"？`, '确认删除', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确认',
                    cancelButtonText: '取消'
                })
                .then(() => {

                    this.isDeleteBtnLoading = true;

                    this.deleteDepartmentAction({
                        id: this.selectedRow.id
                    }).then(() => {

                        this.$message({message: '删除成功', type: "success"})

                    }).catch(() => {

                        this.$alert("删除失败")
                    }).finally(()=>{

                        this.isDeleteBtnLoading = false;
                    })

                })
                .catch(action => {

                    console.log("$confirm::",action)
                   /* this.$message({
                        type: 'info',
                        message: action === 'cancel'
                            ? '放弃保存并离开页面'
                            : '停留在当前页面'
                    })*/
                });

            }
        }
    }
</script>

<style scoped>

    .operation-btns {
        margin: 10px 0 20px 0;
    }
</style>