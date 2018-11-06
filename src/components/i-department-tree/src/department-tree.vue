<template>
    <el-tree
            :data="departmentTree"
            :props="treeCompDefaultProps"
            :default-expanded-keys="defaultExpandedKeys"
            :empty-text="emptyText"
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

                // 内容为空的时候展示的文本
                emptyText:'加载中...',
                errorTex:'数据加载失败'
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
            }),

            /*
            * 设置要展开的层级
            * 默认只展开第一层级
            * */
            setDefaultExpandedKeys() {

                const ids = this.departmentTree.map(item => {

                    return item.id
                })

                this.defaultExpandedKeys = ids
            }
        },
        created() {

            if (!(Array.isArray(this.departmentTree) && this.departmentTree.length > 0)) {

                this.getDepartmentTreeAction().then(() => {

                    this.setDefaultExpandedKeys()

                }).catch(error => {

                    this.emptyText = this.errorTex
                })

            } else {

                this.setDefaultExpandedKeys()
            }
        }

    }
</script>