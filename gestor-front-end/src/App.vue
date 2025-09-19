<template>
    <!-- <defaultLayout></defaultLayout> -->
    <router-view></router-view>
</template>

<script>
    import defaultLayout from './layouts/defaultLayout.vue';
    export default{
        components:{
            defaultLayout
        }
    }
</script>