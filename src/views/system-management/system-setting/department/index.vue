<template>
    <el-row :gutter="10">
        <el-col :span="5">
            <i-main-container allow-scroll-y>
                <i-department-tree></i-department-tree>
            </i-main-container>
        </el-col>
        <el-col :span="19">
            <i-main-container allow-scroll-y>
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="日期"
                            width="180"/>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="180"/>
                    <el-table-column
                            prop="address"
                            label="地址"/>
                </el-table>
            </i-main-container>
        </el-col>
    </el-row>
</template>

<script>

    import {mapActions} from 'vuex'

    export default {
        name: 'department',
        data() {

            return {

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

        methods: {}
    }
</script>