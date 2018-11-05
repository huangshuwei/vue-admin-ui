<template>
	<el-container class="layout-main">
		<el-header>
			<!--top bar-->
			<top-bar/>
		</el-header>
		<el-container>
			<div style="flex:1">
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive"/>
				</keep-alive>
				<router-view v-if="!$route.meta.keepAlive"/>
			</div>
		</el-container>
	</el-container>
</template>

<script>

    import {topBar} from './_layout/main_layout'

    export default {

        components: {
            topBar
        },

        methods: {

        },
        created() {

        }
    }
</script>

