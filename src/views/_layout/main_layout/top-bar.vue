<template>
	<div class="top-bar">

		<el-container>
			<el-aside
				width="200px"
				style="text-align:center">logo
			</el-aside>
			<el-main style="padding: 0 !important;">
				<el-row>
					<el-col :span="19">
						<el-menu
							:default-active="defaultActive"
							router
							class="el-menu-demo"
							mode="horizontal"
							background-color="#fff"
							text-color="#666"
							active-text-color="#000"
							@select="handleSelect">
							<el-menu-item 
								v-for="item in rootState.menuInfo" 
								:key="item.id" 
								:index="'/'+item.url">
								{{ item.name }}
							</el-menu-item>
							&nbsp;
						</el-menu>
					</el-col>
					<el-col
						:span="5">
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
			</el-main>
		</el-container>
	</div>
</template>

<script>

    import {mapActions, mapState} from 'vuex'
    import * as identitys from "@/config/identity.config.js"

    export default {
        data() {
            return {
                defaultActive: '',
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

        watch: {

            $route(to) {

                this.addDefaultMenuKey(to);
            },

            // 切换左侧树菜单
            defaultActive(newVal){

                this.setLeftMenuInfoAction(newVal);
            }
        },


        methods: {
            ...mapActions({
                'switchLeftBar': 'switchLeftBar',
				'setLeftMenuInfoAction':'setLeftMenuInfo'
            }),

            ...mapActions('login', {
                'loginOutAction': 'loginOut'
            }),

            handleSelect() {

            },


            loginOut() {

                this.loginOutAction().then(() => {

                    window.location.href = identitys.LOGIN_PATH;

                }).catch(() => {

                    this.$message({type: 'error', message: '登出失败'});
                });
            },

            // 绑定数组第一个
            addDefaultMenuKey(route) {

                if (route.matched.length > 0){

                    let defaultMenuKey = route.matched[0];

                    this.defaultActive = defaultMenuKey.path;
                }
            }
        }
    }
</script>

<style>

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

    .top-bar {
        border-bottom: 1px solid #e6e6e6;
    }
</style>