<template>

    <div>

        <left-bar></left-bar>

        <router-view></router-view>
    </div>
</template>

<script>

    import leftBar from './left-bar.vue'

    export default{
        name:'app',

        components:{
            leftBar
        }


    }
</script>