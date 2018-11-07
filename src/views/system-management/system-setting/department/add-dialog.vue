<template>
    <el-dialog :width="width" :title="title" :visible.sync="dialogVisible">
        <el-form :model="form" :rules="rules" ref="ruleForm" :label-width="getFormLabelWidth">
            <el-form-item label="父级部门">
                <el-input :placeholder="parentDepart" disabled></el-input>
            </el-form-item>
            <el-form-item label="新增部门" prop="departmentName">
                <el-input v-model.trim="form.departmentName" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="btnConfirm('ruleForm')">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>

    const EVENTS = {
        DIALOG_CONFIRM: 'dialog-confirm'
    }

    export default {
        name: 'AddDialog',
        props: {
            formLabelWidth: {
                type: Number,
                default: 120
            },
            width: {
                type: String,
                default: '50%'
            }
        },
        data() {
            return {
                form: {
                    departmentName: ''
                },
                dialogVisible: false,
                title: '', // 标题
                parentDepart:'', // 父级部门
                // 校验规则
                rules: {
                    departmentName: [
                        {required: true, message: '请输入部门名称', trigger: 'blur'}
                    ],
                }
            }
        },
        computed: {
            getFormLabelWidth() {

                return this.formLabelWidth + 'px'
            }
        },
        methods: {
            // 打开弹窗
            openDialog(option) {

                this.dialogVisible = true;
                this.title = option.title;
                this.parentDepart = option.parentDepart;
                this.form.departmentName = option.currentDepartName ? option.currentDepartName : '';
            },
            // 关闭弹窗
            closeDialog(){

                this.dialogVisible = false;
            },
            btnConfirm(name) {

                this.$refs[name].validate(isValid => {

                    if (isValid) {

                        this.$emit(EVENTS.DIALOG_CONFIRM,this.form)

                        //this.dialogVisible = false;
                    } else {

                        return false
                    }
                })
            }
        },
        watch: {},
        created() {

        }

    }
</script>