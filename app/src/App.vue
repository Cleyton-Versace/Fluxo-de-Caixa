
<template>
  <component :is="currentLayout">

  </component>
</template>
<script setup>
  import LayoutDefault from './layout/LayoutDefault.vue';
  import LayoutMain from './layout/LayoutMain.vue';
  import { computed,watch,onMounted } from 'vue';

  const currentLayout=computed(()=>{
    const token=localStorage.getItem("token")
    return token?LayoutMain:LayoutDefault
  })
</script>

<style scoped>

</style>
