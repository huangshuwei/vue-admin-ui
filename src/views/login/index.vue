<template>
    <div class="login-container">
        <div class="login-form">
            <el-form label-width="0" ref="formLogin" :model="formLogin" :rules="rules" label-position="left">
                <el-form-item prop="account">
                    <el-input placeholder="用户名" prefix-icon="iconfont icon-user" v-model="formLogin.account"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="密码" prefix-icon="iconfont icon-lock" v-model="formLogin.password" :type="passwordType">
                        <i @click.stop.prevent="switchPWD" slot="suffix" class="iconfont icon-eyeoclose login-icon-pwd"></i>
                    </el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="login('formLogin')">登录
            </el-button>
        </div>
    </div>
</template>

<script>

    import {mapActions,mapState} from 'vuex'

    export default {
        data() {
            return {
                formLogin: {
                    account: '',
                    password: ''
                },

                rules:{
                    account:[
                        {required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password:[
                        {required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },

                loading: false,

                passwordType: 'password'
            };
        },

        methods: {
            ...mapActions("login",{
                'loginAction': 'login',
            }),

            // 登录
            login(formName) {

                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.loading = true;

                        this.loginAction(this.formLogin).then(()=>{

                            alert('登录成功')
                            this.loading = false;
                            this.$router.replace({path : '/'});

                        }).catch(error=>{

                            alert('登录失败')
                            this.loading = false;
                        });


                    } else {
                        alert('error submit!!');
                        return false;
                    }
                });
            },

            switchPWD() {

                this.passwordType = this.passwordType === '' ? 'password' : '';

            }
        }
    }
</script>

<style scoped>

    .login-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #2d3a4b;;
    }

    .login-form {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 480px;
        height: 240px;
        margin-left: -240px;
        margin-top: -120px;
    }

    .login-icon-pwd{
        cursor:pointer;
    }
</style>