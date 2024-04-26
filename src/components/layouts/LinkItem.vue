<template>
  <router-link :title="props.title"  class="flex justify-between  items-center    py-3 z-10 relative  text-textColor  hover:font-bold  transition ease-in-out duration-500  cursor-pointer   text-sm space-x-3"  :to="link">
    <span >{{props.title}}</span>
    <span> <IconRight /> </span>
  </router-link>
</template>

<script setup lang="ts">
  import { RouterLink} from 'vue-router'
  import IconRight from '@/components/icons/IconRight.vue'
  const props = defineProps({
    title: {
      title: String ,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
  })
  
</script>

<style  scoped>
 .router-link-exact-active
{
  color: #2B50EE;
  font-weight: 500;
 
} 

</style>