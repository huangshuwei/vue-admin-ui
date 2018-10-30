<template>
	<el-container>
		<el-aside :style="leftBarWidth">
			<left-bar
				class="left-bar-container"/>
		</el-aside>
		<el-container>
			<el-header>
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
	<!--<el-row>
		<el-row>
			<el-col :span="24">
				<div
					v-if="rootState.showHeaderOperation"
					class="header-operation">
					&lt;!&ndash;breadcrumb&ndash;&gt;
					<breadcrumb class="header-operation-breadcrumb"/>

					&lt;!&ndash;history tabs&ndash;&gt;
					<history-tabs class="header-operation-history-tabs"/>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="3">
				<left-bar
					:style="leftBarWidth"
					class="left-bar-container"/>
			</el-col>
			<el-col :span="21">
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive"/>
				</keep-alive>
				<router-view v-if="!$route.meta.keepAlive"/>
			</el-col>
		</el-row>
	</el-row>-->
</template>

<script>
    import {mapState} from 'vuex'
    import leftBar from './left-bar'
    import breadcrumb from './breadcrumb'
    import historyTabs from './history-tabs'

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