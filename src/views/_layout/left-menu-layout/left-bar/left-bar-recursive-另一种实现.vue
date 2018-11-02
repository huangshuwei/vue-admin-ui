<template>
	<div>
		<template v-if="menuInfo.children.length > 0">
			<el-submenu :index="getCurrentUrl()">
				<template slot="title">
					<!--<i class="el-icon-setting"/>-->
					<span>{{ menuInfo.name }}</span>
				</template>

				<!--菜单项-->
				<left-bar-recursive 
					v-for="item in menuInfo.children"
					:key="item.id"
					:menu-info="item" 
					:parent-url="getCurrentUrl()"/>

			</el-submenu>
		</template>
		<template v-else>
			<el-menu-item :index="getCurrentUrl()">{{ menuInfo.name }}</el-menu-item>
		</template>
	</div>
</template>

<script>
    export default {
        name: "LeftBarRecursive",
        props: {
            menuInfo: {
                type: Object,
                required: true
            },
            parentUrl: {
                type: String,
                required: true
            }
        },

        methods:{

            // 获取 subMenu url
            getCurrentUrl(){

                if (this.parentUrl.indexOf('/') === 0){

                    return `${this.parentUrl}/${this.menuInfo.url}`;
                }

                return `/${this.parentUrl}/${this.menuInfo.url}`;
            }
        }
    }
</script>