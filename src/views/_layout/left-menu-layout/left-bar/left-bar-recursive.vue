<template>
	<div>
		<div
			v-for="item in menuTree"
			:key="item.id">
			<template v-if="item.children.length > 0">
				<el-submenu :index="getCurrentUrl(item)">
					<template slot="title">
						<i v-if="item.iconClass" :class="item.iconClass"/>
						<span>{{ item.name }}</span>
					</template>

					<!--递归-->
					<left-bar-recursive
						:menu-tree="item.children"
						:parent-url="getCurrentUrl(item)"/>

				</el-submenu>
			</template>
			<template v-else>
				<el-menu-item :index="getCurrentUrl(item)">
                    <i v-if="item.iconClass" :class="item.iconClass"/>
                    <span>{{ item.name }}</span>
                </el-menu-item>
			</template>
		</div>
	</div>
</template>

<script>
    export default {
        name: "LeftBarRecursive",
        props: {
            menuTree: {
                type: Array,
                required: true
            },
            parentUrl: {
                type: String,
                required: true
            }
        },

        methods: {

            // 获取 subMenu url
            getCurrentUrl(item) {

                if (this.parentUrl.indexOf('/') === 0) {

                    return `${this.parentUrl}/${item.url}`;
                }

                return `/${this.parentUrl}/${item.url}`;
            }
        }
    }
</script>