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
			@node-expand="nodeExpand"
			@node-collapse="nodeCollapse"
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
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                // tree 组件解析属性配置
                treeCompDefaultProps: {
                    children: 'children',
                    label: 'name'
                },
                initExpandedKeys: null,
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
        watch: {

            /*
            * 数据修改、新增、删除 重新触发事件
            * */
            departmentTree() {

                const currentSelectedKey = this.$refs.tree.getCurrentKey();

                if (currentSelectedKey) {

                    //this.$emit('current-node-change', this.$refs.tree.getCurrentNode(key))
                    this.setCurrentKey(currentSelectedKey)
                }
            }
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


                    this.setCurrentKey(ids[0])

                }

                this.defaultExpandedKeys = ids
            },

            // 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性
            setCurrentKey(key) {

                // 等待渲染完成
                this.$nextTick(() => {

                    this.$refs.tree.setCurrentKey(key)
                    this.$emit('current-node-change', this.$refs.tree.getCurrentNode(key))
                })
            },

            // 节点选中变化时触发的事件
            currentNodeChange(node) {

                this.$emit('current-node-change', node)
            },

            // 节点点击事件
            nodeClick() { // params : node

            },

            // 节点展开
            nodeExpand(node) { // params : node

                this.defaultExpandedKeys.push(node.id)
                this.setCurrentKey(node.id)
            },

            // 节点关闭
            nodeCollapse(node) { // params : node

                this.defaultExpandedKeys.splice(this.defaultExpandedKeys.indexOf(node.id), 1)
                this.setCurrentKey(node.id)
            },

            // 通过key移除node节点
            removeNodeByKey(key) {

                console.log("remove key::", this.$refs.tree.remove(key))
            }
        },
        created() {

            if (!(Array.isArray(this.departmentTree) && this.departmentTree.length > 0)) {

                this.getDepartmentTreeAction().then(() => {

                    this.setDefaultExpandedKeys()

                }).catch(() => {

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