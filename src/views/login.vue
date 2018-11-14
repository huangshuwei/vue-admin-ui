<template>
	<div class="login-container">
		<div class="login-form">
			<el-form
				ref="formLogin"
				:model="formLogin"
				:rules="rules"
				label-width="0"
				label-position="left">
				<el-form-item prop="account">
					<el-input
						v-model="formLogin.account"
						placeholder="用户名"
						prefix-icon="iconfont icon-user"/>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="formLogin.password"
						:type="passwordType"
						placeholder="密码"
						prefix-icon="iconfont icon-lock">
						<i
							slot="suffix"
							class="iconfont icon-eyeoclose login-icon-pwd"
							@click.stop.prevent="switchPWD"/>
					</el-input>
				</el-form-item>
			</el-form>
			<el-button
				:loading="loading"
				type="primary"
				style="width:100%;"
				@click.native.prevent="login('formLogin')">登录
			</el-button>
		</div>
	</div>
</template>

<script>

    import {mapActions} from 'vuex'
    import * as identitys from "@/config/identity.config.js"

    export default {
        data() {
            return {
                formLogin: {
                    account: 'admin',
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

                        this.loginAction(this.formLogin).then((data)=>{

                            this.loading = false;
                            if (data.status === 1){

                                this.$message({type:'success',message:'登录成功',duration:1200});
                                window.location.href = identitys.HOME_PATH;

                            }else{

                                this.$message({type:'error',message:data.msg});
                            }
                        }).catch(()=>{

                            this.$message({type:'error',message:'登录失败'});
                            this.loading = false;
                        });

                    } else {

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