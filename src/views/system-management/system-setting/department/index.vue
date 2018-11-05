<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <div class="department-tree scroll">
                <el-tree :data="treeData" node-key="id" :props="treeCompDefaultProps" default-expand-all="">
                </el-tree>
            </div>
        </el-col>
        <el-col :span="16">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>

    import {mapActions} from 'vuex'

    export default {

        data() {

            return {

                treeData: [],
                treeCompDefaultProps: {
                    children: 'children',
                    label: 'name'
                },

                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },

        methods: {

            ...mapActions('department', {
                'getDepartmentTreeAction': 'getDepartmentTree'
            })
        },

        created() {

            this.getDepartmentTreeAction().then(data => {

                this.treeData = data
            });
        }
    }
</script>

<style>
    .department-tree{
        overflow-y: scroll;
        height: calc(100vh - 120px);
    }
</style>