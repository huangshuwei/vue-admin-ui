<template>
    <el-tree
            :data="departmentTree"
            :props="treeCompDefaultProps"
            node-key="id"
            :default-expanded-keys="[1]"/>
</template>

<script>

    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'IDepartmentTree',
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
        props: {},
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