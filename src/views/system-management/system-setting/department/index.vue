<template>
    <div>部门维护</div>
</template>

<script>

    import {mapActions} from 'vuex'

    export default {

        methods: {

            ...mapActions('department', {
                'getDepartmentTreeAction': 'getDepartmentTree'
            })
        },

        created() {

            this.getDepartmentTreeAction().then(data => {

                console.log("getDepartmentTreeAction::", JSON.stringify(data))
            });
        }
    }
</script>