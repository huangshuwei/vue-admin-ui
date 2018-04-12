<template>
    <div class="login-container">
        <div class="login-form">
            <el-form label-width="0" :model="formLogin" label-position="left">
                <el-form-item>
                    <el-input placeholder="用户名" prefix-icon="iconfont icon-user" v-model="formLogin.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="密码" prefix-icon="iconfont icon-lock" :type="passwordType"
                              v-model="formLogin.region">
                        <i @click.stop.prevent="switchPWD" slot="suffix" class="iconfont icon-eyeoclose login-icon-pwd"></i>
                    </el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="login">登录
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formLogin: {
                    name: '',
                    region: '',
                    type: ''
                },

                loading: false,

                passwordType: 'password'
            };
        },

        methods: {

            login() {

                this.$router.replace({path : '/'});
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