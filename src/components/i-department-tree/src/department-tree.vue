<template>
	<div>
		<el-tree
			ref="tree"
			:data="departmentTree"
			:props="treeCompDefaultProps"
			:default-expanded-keys="defaultExpandedKeys"
			:empty-text="emptyText"
			highlight-current
			node-key="id"
			@current-change="currentNodeChange"
			@node-click="nodeClick"
		/>
	</div>
</template>

<script>

    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'IDepartmentTree',
        props: {
            // 是否选中第一个节点（选中后将触发选中事件）
            isFirstNodeCheck: {
                type: Boolean
            }
        },
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
                emptyText: '加载中...',
                errorTex: '数据加载失败'
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

                // 默认设置第一项
                if (this.isFirstNodeCheck) {

                    this.$nextTick(()=>{

                        this.setCurrentKey(ids[0])
                    })
                }

                this.defaultExpandedKeys = ids
            },

            // 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性
            setCurrentKey(key) {

                this.$refs.tree.setCurrentKey(key)

                this.$emit('current-node-change', this.$refs.tree.getCurrentNode(key))
            },

            // 节点选中变化时触发的事件
            currentNodeChange(node) {

                this.$emit('current-node-change', node)
            },

            // 节点点击事件
            nodeClick(node){

                //this.$emit('current-node-change', node)
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
        },
        mounted() {

            //console.log(this.getCurrentNode())
        }

    }
</script>