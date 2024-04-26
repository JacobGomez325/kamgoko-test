<template>
  <div class="w-full">
    <div class="flex">
      <TheSidebar />
      <div class="w-full h-screen bg-mainBackground pl-[25%]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TheSidebar from '../components/layouts/TheSidebar.vue';
 
</script>

<style lang="scss" scoped>

</style>