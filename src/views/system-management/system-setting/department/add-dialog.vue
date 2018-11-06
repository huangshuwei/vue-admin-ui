<template>
    <el-dialog :width="width" :title="title" :visible.sync="dialogVisible">
        <el-form :model="form" :rules="rules" ref="ruleForm" :label-width="getFormLabelWidth">
            <el-form-item label="部门名称"  prop="name">
                <el-input v-model.trim="form.name" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="btnConfirm('ruleForm')">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: 'AddDialog',
        props: {
            form: {
                type: Object,
                default: function () {
                    return {
                        name: '',
                        region: '',
                        date1: '',
                        date2: '',
                        delivery: false,
                        type: [],
                        resource: '',
                        desc: ''
                    }
                }
            },
            formLabelWidth: {
                type: Number,
                default: 120
            },
            width:{
                type:String,
                default:'50%'
            }
        },
        data() {
            return {
                dialogVisible: false,
                title:'', // 标题
                rules:{
                    name: [
                        { required: true, message: '请输入部门名称', trigger: 'blur' }
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
            },
            btnConfirm(name){

                this.$refs[name].validate(isValid=>{

                    if (isValid){

                        alert('成功')
                        this.dialogVisible = false;
                    }else{

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