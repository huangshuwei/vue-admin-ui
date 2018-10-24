<template>
	<el-container class="layout-main">
		<el-aside
			:style="leftBarWidth"
			class="left-bar-container">
			<!--left bar-->
			<left-bar/>

		</el-aside>
		<el-container>
			<el-header height="120">
				<!--top bar-->
				<top-bar/>

				<div
					v-if="rootState.showHeaderOperation"
					class="header-operation">
					<!--breadcrumb-->
					<breadcrumb class="header-operation-breadcrumb"/>

					<!--history tabs-->
					<history-tabs class="header-operation-history-tabs"/>
				</div>
			</el-header>
			<el-main>
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

    import {breadcrumb, historyTabs, leftBar, topBar, childRouteTpl} from './_layout/index'

    export default {

        components: {
            breadcrumb, historyTabs, leftBar, topBar, childRouteTpl
        },

        computed: {

            ...mapState({
                rootState: state => state.root
            }),

            leftBarWidth() {

                return {
                    'width': this.rootState.isExpand ? this.rootState.leftBarExpandWidth : this.rootState.leftBarFoldWidth
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
</style>