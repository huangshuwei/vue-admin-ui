<template>
	<el-tree
		:data="departmentTree"
		:props="treeCompDefaultProps"
		:default-expanded-keys="[1]"
		node-key="id"/>
</template>

<script>

    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'IDepartmentTree',
        props: {},
        data() {
            return {
                treeData: [],
                // tree 组件解析属性配置
                treeCompDefaultProps: {
                    children: 'children',
                    label: 'name'
                },
                // 默认展开的key
                defaultExpandedKeys: [],
            }
        },
        computed: {
            ...mapState('department', {
                'departmentTree': 'departmentTree'
            })
        },
        methods: {

            ...mapActions('department', {
                'getDepartmentTreeAction': 'getDepartmentTree'
            })
        },
        created() {

            if (!(Array.isArray(this.departmentTree) && this.departmentTree.length > 0)) {

                this.getDepartmentTreeAction().catch(error => {

                    console.log("获取部门信息异常，" + error)
                })
            }
        }

    }
</script>