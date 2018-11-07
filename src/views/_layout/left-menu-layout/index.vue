<template>
	<el-container>
		<el-aside :style="leftBarWidth">
			<left-bar
				class="left-bar-container"/>
		</el-aside>
		<el-container>
			<el-header :style="headerOperationHeight">
				<div
					v-if="rootState.showHeaderOperation"
					class="header-operation">
					<!--breadcrumb-->
					<breadcrumb class="header-operation-breadcrumb"/>

					<!--history tabs-->
					<history-tabs class="header-operation-history-tabs"/>
				</div>
			</el-header>
			<el-main 
				:style="mainContainerStyle" 
				class="main-container scroll">
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive"/>
				</keep-alive>
				<router-view v-if="!$route.meta.keepAlive"/>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
    import {mapState} from 'vuex'
    import leftBar from './left-bar/index'
    import breadcrumb from './breadcrumb'
    import historyTabs from './history-tabs'

    import vh from '@/utils/dom/viewport-height'

    export default {
        name: 'LeftBar',
        components: {
            leftBar, breadcrumb, historyTabs
        },
        computed: {

            ...mapState({
                rootState: state => state.root
            }),

            leftBarWidth() {

                return {
                    'width': this.rootState.isExpand ? this.rootState.leftBarExpandWidth + 'px' : this.rootState.leftBarFoldWidth + 'px'
                }
            },
            headerOperationHeight() {

                return {
                    'height': this.rootState.headerOperationHeight + 'px'
                }
            },
            mainContainerStyle() {

                return {
                    //'height': (vh() - this.rootState.topBarHeight - this.rootState.headerOperationHeight - 1) + 'px',
                    'height': (vh() - this.rootState.topBarHeight - this.rootState.headerOperationHeight - this.rootState.contentPadding * 2 - 10) + 'px',
                    'padding': this.rootState.contentPadding+'px !important'
                }
            }
        }

    }
</script>

<style>

    .left-bar-container {
        border-right: 1px solid #e6e6e6;
        overflow-x: hidden;
    }

    .main-container {
        overflow-y: scroll;
        /*height: calc(100vh - 96px);*/
        background: #f0f2f5;
        border-top: 1px solid #eee;
    }

    .header-operation {
        height: 100%;
        /* background-color: #f5f4f4;*/
    }

    .header-operation:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        /* border: 1px solid red;*/ /* so we can see what's going on */
    }

    .header-operation-breadcrumb {
        vertical-align: middle;
        display: inline-block;
        min-width: 230px;
        padding-left: 10px;
    }

    .header-operation-history-tabs {
        vertical-align: middle;
        display: inline-block;
    }

    .header-operation-history-tabs .el-tag {
        margin-left: 10px;
        cursor: pointer;
		background: #fff !important;
		border-radius:0;
    }
</style>