<template>
	<div class="top-bar">
		<el-row>
			<el-col :span="2">
				<div class="top-bar-expand">
					<span 
						class="top-bar-expand-span" 
						@click.stop="switchLeftBar()"><i
							:class="['top-bar-expand-i','iconfont','icon-caidan',topBarExpandIClasses]"/></span>
				</div>
			</el-col>
			<el-col :span="19">
				<el-menu
					:default-active="activeIndex"
					class="el-menu-demo"
					mode="horizontal"
					background-color="#fff"
					text-color="#666"
					active-text-color="#000"
					@select="handleSelect">
					<el-menu-item index="1">权限管理</el-menu-item>
					<el-menu-item index="2">考勤管理</el-menu-item>
					<!--<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
					</el-submenu>-->
					<el-menu-item index="3">系统设置</el-menu-item>
					<el-menu-item index="4"><a
						href="http://www.google.com"
						target="_blank">其他模块</a></el-menu-item>
				</el-menu>
			</el-col>
			<el-col 
				:span="2" 
				:offset="1">
				<div class="top-bar-account">
					<el-dropdown trigger="click">
						<span class="el-dropdown-link top-bar-account-link">
							设置<i class="el-icon-arrow-down el-icon--right"/>
						</span>
						<el-dropdown-menu slot="dropdown">
							<!--<el-dropdown-item>test</el-dropdown-item>
                            <el-dropdown-item>test</el-dropdown-item>-->
							<el-dropdown-item @click.native="loginOut()">登出</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>

    import {mapActions, mapState} from 'vuex'
    import * as identitys from "@/config/identity.config.js"

    export default {
        data() {
            return {
                activeIndex: '1',
                previewBtnLoading: false,
                saveBtnLoading: false,
                publishLoading: false
            };
        },
        computed: {

            ...mapState({
                rootState: state => state.root
            }),

            topBarExpandIClasses() {

                return {
                    'active': !this.rootState.isExpand
                }
            }
        },
        methods: {
            ...mapActions({
                'switchLeftBar': 'switchLeftBar',
                "previewAction": "preview"
            }),

            ...mapActions('login', {
                'loginOutAction': 'loginOut'
            }),

            handleSelect(){

			},


            loginOut() {

                this.loginOutAction().then(() => {

                    window.location.href = identitys.LOGIN_PATH;

                }).catch(() => {

                    this.$message({type: 'error', message: '登出失败'});
                });

            }
        }
    }
</script>

<style>
    .top-bar-expand {
        height: 60px;
        line-height: 60px;
        padding: 0 15px;
        background-color: #fff;
        /*    border-bottom: solid 1px #e6e6e6;*/
        min-width: 100px;

    }

    .top-bar-expand-span {
        cursor: pointer;
    }

    .top-bar-expand i {
        font-size: 24px;
    }

    /*top-bar end*/

    /* account start*/
    .top-bar-account {
        height: 60px;
    }

    .top-bar-account:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        /* border: 1px solid red;*/ /* so we can see what's going on */
    }

    .top-bar-account-link {
        cursor: pointer;
    }

    .top-bar-expand-i {
        display: inline-block;
        transform: rotate(0deg);
        transition: .38s;
        transform-origin: 50% 50%;
    }

    .top-bar-expand-i.active {
        transform: rotate(-90deg);
    }

    .top-bar {
        border-bottom: 1px solid #e6e6e6;
    }

    .top-bar-operation-button {
        height: 60px;
        line-height: 60px;
        float: right;
    }
</style>