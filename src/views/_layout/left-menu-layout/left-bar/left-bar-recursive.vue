<template>
    <div>
        <template v-if="menuTree.children.length > 0">
            <el-submenu :index="getCurrentUrl()">
                <template slot="title">
                    <!--<i class="el-icon-setting"/>-->
                    <span>{{menuTree.name}}</span>
                </template>

                <!--菜单项-->
                <left-bar-recursive v-for="item in menuTree.children" :menu-tree="item" :parent-url="getCurrentUrl()"/>

            </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :index="getCurrentUrl()">{{menuTree.name}}</el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        name: "left-bar-recursive",
        props: {
            menuTree: {
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

                    return `${this.parentUrl}/${this.menuTree.url}`;
                }

                return `/${this.parentUrl}/${this.menuTree.url}`;
            }
        }
    }
</script>